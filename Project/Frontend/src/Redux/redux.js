// redux.js
import { createStore } from 'redux';

// Action types
const ADD_QUIZ_RESULT = 'ADD_QUIZ_RESULT';

// Action creators
export const addQuizResult = (marks, attempts) => ({
  type: ADD_QUIZ_RESULT,
  payload: { marks, attempts },
});

// Reducer
const initialState = {
  quizResults: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUIZ_RESULT:
      return {
        ...state,
        quizResults: [...state.quizResults, action.payload],
      };
    default:
      return state;
  }
};

// Redux store
const store = createStore(reducer);

export default store;
