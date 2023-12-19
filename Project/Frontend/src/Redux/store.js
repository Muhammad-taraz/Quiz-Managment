import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Call reducers
import questionReducer from "./Question_Reducer";
import { resultReducer } from "./Result_Reducer";

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

// Create store with reducer
export default configureStore({ reducer : rootReducer});