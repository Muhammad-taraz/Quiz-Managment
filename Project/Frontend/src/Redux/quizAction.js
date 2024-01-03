// quizActions.js
export const updateQuizResult = (quizResult) => {
    return {
        type: 'UPDATE_QUIZ_RESULT',
        payload: quizResult,
    };
};
export const resetQuizState = () => {
    return {
        type: 'RESET_QUIZ_STATE',
    };
};