export default function reducer(state = {
    currentQuestion: null,
    questionsList: [],
    answerList: [],
    fetching: false,
    fetched: false,
    error: false
}, action) {
    switch (action.type) {
      case "FETCH_QUESTIONS": {
          return {
              ...state,
              questionsList: [],
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_QUESTIONS_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              questionsList: [],
              error: action.payload
          }
          break;
      }
      case "FETCH_QUESTIONS_BY_ID_FULFILLED": {
        return {
            ...state,
            fetching: false,
            fetched: true,
            currentQuestion: action.payload
        }
        break;
      }
      case "FETCH_QUESTIONS_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              questionsList: action.payload
          }
          break;
      }
      case "SAVE_ANSWERS": {
          return {
              ...state,
              fetching: false,
              fetched: true,
              answerList: action.payload
          }
          break;
      }

    }
    return state;
}
