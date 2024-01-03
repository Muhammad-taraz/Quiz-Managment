// quizReducer.js
const initialState = {
    totalAttempts: 0,
    earnPoints: 0,
    resultStatus: false,
    answers: [], // Store correctness of each answer
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_QUIZ_RESULT':
            return {
                ...state,
                ...action.payload,
            };
        case 'RESET_QUIZ_STATE':
            return initialState; // Reset the state to its initial values
        default:
            return state;

    }

};

export default quizReducer;
