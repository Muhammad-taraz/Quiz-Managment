// QuizResult.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import answerKey from "./Answer"; // Assuming you have a file with answer keys

const QuizResult = () => {
  const quizResults = useSelector((state) => state.quizResults);

  // Function to calculate total correct answers
  const calculateCorrectAnswers = () => {
    let correctAnswers = 0;

    quizResults.forEach((userAnswers) => {
      Object.entries(userAnswers).forEach(([questionNumber, userAnswer]) => {
        const correctAnswer = answerKey[questionNumber];

        if (userAnswer === correctAnswer) {
          correctAnswers += 1;
        }
      });
    });

    return correctAnswers;
  };

  const totalCorrectAnswers = calculateCorrectAnswers();
  const totalQuestions = Object.keys(answerKey).length;
  const totalAttempts = quizResults.length;

  return (
    <div>
      <h1>Quiz Result</h1>
      <div>
        <p>Total Correct Answers: {totalCorrectAnswers}</p>
        <p>Total Questions: {totalQuestions}</p>
        <p>Total Attempts: {totalAttempts}</p>
      </div>
    </div>
  );
};

export default QuizResult;
