// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combineReducer"; // Import your root reducer file

const store = configureStore({
  reducer: rootReducer,
  // Add middleware or enhancers if needed
});

export default store;
