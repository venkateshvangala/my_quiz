import axios from 'axios'
import * as questionsActions from 'actions/questions/questions-actions'
import _ from 'underscore'

export function fetchQuestionByNumber(questionNumber) {
    return function(dispatch){
        axios.get("src/data/data.json")
        .then((response) => {
            var question = _.findWhere(response.data.questions, {id: questionNumber})
            dispatch({type: "FETCH_QUESTIONS_BY_ID_FULFILLED", payload: question})
        })
        .catch((err) => {
            dispatch({type: "FETCH_QUESTIONS_REJECTED", payload: err})
        })
    }
}

export function fetchAllQuestions() {
    return function(dispatch){
        axios.get("src/data/data.json")
        .then((response) => {
            dispatch({type: "FETCH_QUESTIONS_FULFILLED", payload: response.data.questions})
        })
        .catch((err) => {
            dispatch({type: "FETCH_QUESTIONS_REJECTED", payload: err})
        })
    }
}

export function saveAnswers(answer) {
  return function(dispatch){
    dispatch({type: "SAVE_ANSWERS", payload: answer})
  }
}





export function clearFetchQuestions() {
    return function(dispatch){
        dispatch({type: "FETCH_QUESTIONS"})
    }
}
