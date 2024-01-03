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
  const quizResult = earnPoints >= passingMarks ? "Passed" : "Failed";

  const borderVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.92 } },
  };

  const handleRestart = () => {
    // Reset quiz state
    dispatch(resetQuizState());
  };

  return (
    <div className="container6 h-[100%] w-[100%] text-white opacity-90">
      <h1 className="flex font-bold justify-center p-7 text-5xl italic underline">
        Result
      </h1>

      <motion.div
        className="border-[2px] border-black mt-7 w-[54rem] ml-[15rem]"
        initial="hidden"
        animate="visible"
        variants={borderVariants}
      >
        <div className="flex flex-col font-semibold gap-5 text-lg italic mt-12">
          <div className="flex justify-evenly">
            <span>Username</span>
            <span>Daily Tution</span>
          </div>

          <div className="flex justify-evenly">
            <span>Total Quiz Points</span>
            <span>200</span>
          </div>

          <div className="flex justify-evenly">
            <span>Total question</span>
            <span>20</span>
          </div>

          <div className="flex justify-evenly">
            <span>Total attempts</span>
            <span>{totalAttempts}</span>
          </div>

          <div className="flex justify-evenly">
            <span>Total Earn Points</span>
            <span>{earnPoints}</span>
          </div>

          <div className="flex justify-evenly">
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