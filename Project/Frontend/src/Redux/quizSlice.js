// quizSlice.js
import { createSlice } from '@reduxjs/toolkit';
import answerKey from './answerKey';

const initialState = {
  currentIndex: 0,
  selectedAnswer: null,
  totalAttempts: 0,
  totalEarnPoints: 0,
  quizResult: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    incrementTotalAttempts: (state) => {
      state.totalAttempts += 1;
    },
    updateTotalEarnPoints: (state, action) => {
      state.totalEarnPoints += action.payload;
    },
    setQuizResult: (state, action) => {
      state.quizResult = action.payload;
    },
    resetQuizState: (state) => {
      state.currentIndex = 0;
      state.selectedAnswer = null;
      state.totalAttempts = 0;
      state.totalEarnPoints = 0;
      state.quizResult = null;
    },
    onSelect: (state, action) => {
      const correctOptionIndex = answerKey[state.currentIndex];

      state.selectedAnswer = action.payload;

      // Check if the selected option index is correct
      if (action.payload === correctOptionIndex) {
        state.totalEarnPoints += 10; // Assuming each correct option gives 10 points
      }
    },
  },
});

export const {
  setCurrentIndex,
  setSelectedAnswer,
  incrementTotalAttempts,
  updateTotalEarnPoints,
  setQuizResult,
  resetQuizState,
  onSelect,
} = quizSlice.actions;

export default quizSlice.reducer;
