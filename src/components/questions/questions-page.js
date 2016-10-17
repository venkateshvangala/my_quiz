import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { fetchAllQuestions, fetchQuestionByNumber } from '../../actions/questions/questions-actions'
import QuestionContainer from '../utils/question'

@connect( (store) => {
  return {
    currentQuestion: store.questionReducer.currentQuestion,
    questionsList: store.questionReducer.questionsList,
    fetched: store.questionReducer.fetched
  }
})

export default class QuestionsPage extends Component {
    componentWillMount(){
        this.props.dispatch(fetchAllQuestions())
     }
    render(){
        var questionContainer = null;
        if(this.props.fetched && this.props.questionsList.length){
          questionContainer = <QuestionContainer {...this.props} {...this.state}/>
        }
        return(
            <div className='container-home'>
                <h2 className="page-header">Welcome {this.props.location.query.name}</h2>
                <div className="question-container container">
                   <div className="col-md-12"> {questionContainer} </div>
                </div>
            </div>
        )
    }
}
