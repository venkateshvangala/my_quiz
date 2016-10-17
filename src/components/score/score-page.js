import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import BarChart from 'react-bar-chart'

const margin = {top: 20, right: 20, bottom: 30, left: 40};

@connect( (store) => {
  return {
    answerList: store.questionReducer.answerList,
    fetched: store.questionReducer.fetched
  }
})
export default class HomePage extends Component {
    state = {
      width: 500
    }

    componentDidMount(){
      var domNode = this.getDOMNode();
      window.onresize = () => {
       this.setState({width: domNode.offsetWidth});
      }
    }

    render(){
        var answerList = [];
        var graphData = [];
        if(this.props.answerList.length){
          answerList = this.props.answerList.map( (answer, index) => {
              var value = answer.question.correctAnswer == answer.ans ? 100 : 0
              graphData.push({
                text: index + 1,
                value: value
              })

              return <tr key={answer.question.id}>
                  <th scope="row"> { index + 1 } </th>
                  <td>{answer.question.question}</td>
                  <td>{answer.question.correctAnswer } </td>
                  <td>{answer.ans}</td>
              </tr>
           })
        }else{
          this.props.history.push('/');
        }

        return(
            <div className='container-home'>
                <h2 className="page-header">Analysis</h2>
                <div className="container">
                  <table className="table">
                     <thead>
                       <tr>
                         <th>#</th>
                         <th>Question</th>
                         <th>Correct Answer</th>
                         <th>Answered</th>
                       </tr>
                     </thead>
                     <tbody>
                        {answerList}
                     </tbody>
                  </table>
                  <BarChart width={this.state.width} height={500} margin={margin} data={graphData} />
                </div>
            </div>
        )
    }
}
