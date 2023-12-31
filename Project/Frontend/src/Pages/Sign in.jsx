import React, { useState } from "react";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import LandingPage from "./Landing-Page";
import Quiz from "./Quiz";
import { motion } from "framer-motion";

const Signin = () => {
  const navigate = useNavigate();

  // const [email,setEmail] =  useState("")
  // const [password,setPassword] =  useState("")

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const borderVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.92 } },
  };

  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/LandingPage");
  };
  return (
    <React.Fragment>
      <div className="container2 flex justify-center items-center">
        <motion.div
          className="flex flex-col my-11 bg-slate-300 p-12 w-[33rem] h-[40rem] bg-opacity-75 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={borderVariants}
        >
          <h1 className="flex font-bold justify-center mt-5 text-5xl italic underline">
            Sign in
          </h1>

          <form onSubmit={submitHandler}>
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
              value={data.email}
              onChange={handleValue}
            />

            <label
              htmlFor="Username"
              className="flex font-semibold italic text-lg"
            >
              Username
            </label>

            <input
              required
              type="text"
              placeholder="Username"
              name="username"
              className="flex w-[24rem] mt-5 italic p-2 my-1 border-[4px] rounded-lg"
              value={data.username}
              onChange={handleValue}
            />

            <label
              htmlFor="password"
              className="flex font-semibold italic text-lg mt-5 "
            >
              Password
            </label>

            <input
              required
              type="password"
              placeholder="password"
              name="password"
              className="flex w-[24rem] mt-5 italic p-2 my-1 border-[4px] rounded-lg"
              value={data.password}
              onChange={handleValue}
            />

            <button
              className="font-semibold text-lg italic mt-12 h-[3rem] w-[12rem]
             p-2 bg-green-400 rounded-md hover:bg-green-900"
              type="submit"
              to={"/LandingPage"}
            >
              Create new account{" "}
            </button>

            <div className="flex justify-between mt-7 w-[100%]">
              <Link
                className="flex font-semibold mt-3 italic cursor-pointer p-2 text-lg"
                to={"/forgotPassword"}
              >
                Forgot password
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
export default Signin;
