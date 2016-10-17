import React, { Component } from 'react';
import render from 'react-dom';
import { Navigation } from 'react-router'
import { connect } from 'react-redux'

import { fetchQuestionByNumber, saveAnswers } from '../../actions/questions/questions-actions'

@connect( (store) => {
  return {
    currentQuestion: store.questionReducer.currentQuestion,
    answerList: store.questionReducer.answerList
  }
})
export default class QuestionContainer extends Component {
    state = {
      questionNumber: 1,
      selectedOption: null
    }

    componentDidMount(){
         this.props.dispatch(fetchQuestionByNumber(this.state.questionNumber))
    }

    handleNext(){
        if(!this.state.selectedOption){
          alert("Please select atleast one option")
        }else{
          this.setState({
            questionNumber: (this.state.questionNumber + 1)
          })

          this.saveAnswers()
          this.props.dispatch(fetchQuestionByNumber(this.state.questionNumber + 1))
        }
    }

    saveAnswers(){
      var answer = {
        question: this.props.currentQuestion,
        ans: this.state.selectedOption
      }
      var answers = this.props.answerList;
      answers.push(answer)
      this.props.dispatch(saveAnswers(answers))
      this.setState({
        selectedOption: null
      })
    }

    handleFinish(e){
      if(!this.state.selectedOption){
        alert("Please select atleast one option")
      }else{
         this.saveAnswers()
         this.props.history.push('/score');
      }
    }

    handleValues(e){
      this.setState({
        selectedOption: e.target.value
      })
    }

    render(){
      var itemListElement = null;
      var button = null;
      if(this.state.questionNumber == 5){
        button = <button className="btn btn-success pull-right" onClick={this.handleFinish.bind(this)}>Finish</button>
      }else{
        button = <button className="btn btn-success pull-right" onClick={this.handleNext.bind(this)}>Next</button>
      }
      if(this.props.fetched && this.props.currentQuestion){
            var question = <div> {this.state.questionNumber}) { this.props.currentQuestion.question } </div>
            itemListElement = this.props.currentQuestion.choices.map((choice, index) => {
                return  <div key={choice} className="question-options"> <input type="radio" onChange={this.handleValues.bind(this)} value={choice} name="choice" /> {choice} </div>
            })
            return(
              <div>
                 {question}
                 {itemListElement}
                 {button}
              </div>
          )
      }
      return null
    }
}
