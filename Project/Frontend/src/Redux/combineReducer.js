// rootReducer.js
import { combineReducers } from 'redux';
import quizReducer from './quizSlice';

const rootReducer = combineReducers({
  quiz: quizReducer,
  // Add other reducers here if needed
});

export default rootReducer;
