import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"

function LandingPage() {
  const [count, setCount] = useState(0);

  const borderVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.92 } },
  };

  return (
    <React.Fragment>
      <motion.div className="container5 bg-cover bg-no-repeat text-slate-100"
        initial="hidden"
        animate="visible"
        variants={borderVariants}>

        <h1 className="wrapper flex font-bold text-center text-7xl italic underline">
          Welcome to Quiz Management
        </h1>

        <div>
          <h2 className="flex font-semibold text-5xl italic mt-11">
            Instructions:
          </h2>

          <div className="flex mt-5 text-3xl italic pl-48">
            <ol>
              {/* <li className="pb-3">1. Here you have 5 subjects in the list.</li> */}
              <li className="pb-3">
                1. Here you have random 20 multiple choices one after another.
              </li>
              <li className="pb-3">
                2. Each question has three options. You can choose only one
                option.
              </li>
              <li className="pb-3">
                3. Ten points are awarded for the correct answer.
              </li>
              <li className="pb-3">
                4. You can review and change answers before the quiz is
                finished.
              </li>
              <li className="pb-3">
                5. The result will be declared at the end of the quiz.
              </li>
              {/* <li className="pb-3">
                7. You can also check your rank on the Leaderboard.
              </li> */}
            </ol>
          </div>
        </div>

        <div className="btn items-center">
          <Link
            className="flex font-semibold text-lg italic mt-12 h-11 w-28 items-center p-2  bg-green-400 rounded-md hover:bg-green-800 shadow-xl shadow-green-300 border-black"
            to={"/Quiz"}
          >
            Get Started
          </Link>
        </div>

        <div className="flex text-3xl font-semibold italic text-left justify-end">
          Developed by Muhammad Taraz
        </div>
      </motion.div>
    </React.Fragment>
  );
}

export default LandingPage;
