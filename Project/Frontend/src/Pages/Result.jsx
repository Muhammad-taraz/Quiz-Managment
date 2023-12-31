import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Result() {
  function onRestart() {
    console.log("Restart");
  }

  const borderVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.92 } },
  };

  return (
    <>
      <div className="container6 h-[100%] w-[100%] text-slate-50">
        <h1 className="flex font-bold justify-center mt-5 text-5xl italic underline">
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
              <span>12</span>
            </div>

            <div className="flex justify-evenly">
              <span>Total Earn Points</span>
              <span>92</span>
            </div>

            <div className="flex justify-evenly">
              <span>Quiz Result</span>
              <span>Passed</span>
            </div>
            <br />
          </div>
        </motion.div>

        <div className="flex justify-center">
          <Link
            className="flex font-semibold justify-center text-lg italic mt-11 h-11 w-[8rem] p-2
         bg-green-400 rounded-md hover:bg-green-900 border-black"
            to={"/LandingPage"}
            onClick={onRestart}
          >
            Restart
          </Link>
        </div>
      </div>
    </>
  );
}
