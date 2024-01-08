// Result.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { resetQuizState } from '../Redux/quizAction';

export default function Result() {

  const dispatch = useDispatch();

  // const { totalAttempts, totalEarnPoints, quizResult } = useSelector((state) => state.quiz);

  // const onRestart = () => {
  //   console.log("Restart");
  //   // Reset quiz state when restarting
  //   resetQuizState();
  // };

  const {
    totalEarnPoints,
    totalAttempts,
    passingMarks,
    answers, // Retrieve answers from the state
  } = useSelector((state) => state.quiz);

  // Calculate earnPoints based on correct answers
  const earnPoints = answers.filter((answer) => answer).length * 10;

  // Calculate quizResult based on passingMarks
  // const quizResult = earnPoints >= passingMarks ? "Passed" : "Failed";
  const quizResult = earnPoints >= 20 ? "Passed" : "Failed";

  const borderVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.92 } },
  };

  const handleRestart = () => {
    // Reset quiz state
    dispatch(resetQuizState());
  };

  return (
    <div className="container6 flex flex-col items-center justify-center h-[100%] w-[100%] text-white">
      <h1 className="flex font-bold text-white justify-center mt-[-8rem] pb-7 text-5xl italic underline">
        Result
      </h1>

      <motion.div
        className="bg-black bg-opacity-5 border-[2px] border-black w-[54rem]"
        initial="hidden"
        animate="visible"
        variants={borderVariants}
      >
        <div className="flex flex-col font-bold gap-7 text-3xl italic mt-12">
          <div className="flex justify-around">
            <span>Username</span>
            <span>Daily Tution</span>
          </div>

          <div className="flex justify-around">
            <span>Total Quiz Points</span>
            <span>50</span>
          </div>

          <div className="flex justify-around">
            <span>Total question</span>
            <span>5</span>
          </div>

          <div className="flex justify-around">
            <span>Total attempts</span>
            <span>{totalAttempts}</span>
          </div>

          <div className="flex justify-around">
            <span>Total Earn Points</span>
            <span>{earnPoints}</span>
          </div>

          <div className="flex justify-around">
            <span>Quiz Result</span>
            <span>{quizResult}</span>
          </div>
          <br />
        </div>
      </motion.div>

      <div className="flex justify-center">
        <Link
          className="flex font-semibold justify-center text-lg italic mt-11 h-11 w-[8rem] p-2
          bg-green-400 rounded-md hover:bg-green-800 shadow-xl shadow-green-300 border-black"
          to={"/LandingPage"}
          onClick={handleRestart}
        >
          Restart
        </Link>
      </div>
    </div>
  );
}