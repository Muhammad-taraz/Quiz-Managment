import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const borderVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.92 } },
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/LandingPage");
  };
  return (
    <React.Fragment>
      <div className="container3 flex justify-center items-center">
        <motion.div
          className="flex flex-col my-11 bg-slate-300 p-12 w-[30rem] h-[34rem] bg-opacity-75 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={borderVariants}
        >
          {" "}
          <h1 className="flex font-bold justify-center mt-5 text-5xl italic underline">
            Reset password
          </h1>
          <form
        onSubmit={submitHandler}
          >
            <label
              htmlFor="email"
              className="flex font-semibold italic text-lg"
            >
              Email
            </label>

            <input
              required
              type="email"
              placeholder="email"
              name="email"
              className="flex w-[24rem] mt-5 italic p-2 my-1 border-[4px] rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="flex font-semibold justify-center text-lg italic mt-12 h-11 w-[10rem] p-2
              bg-green-400 rounded-md hover:bg-green-900 border-black"
              type="submit"
              to={"/LandingPage"}
            >
              Reset password{" "}
            </button>

            <div className="flex justify-between mt-12 w-[100%]">
              <Link
                className="flex font-semibold mt-3 italic cursor-pointer p-3 text-lg"
                to={"/Signin"}
              >
                Sign in
              </Link>

              <div className="flex">
                <span className="mt-6 italic text-lg">
                  Already have an account
                </span>
                <Link
                  className="flex font-semibold mt-3 italic cursor-pointer p-3 text-lg"
                  to={"/Login"}
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </React.Fragment>
  );
};
export default ForgotPassword;
