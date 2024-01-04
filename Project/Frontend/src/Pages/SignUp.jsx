import React, { useState } from "react";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import LandingPage from "./Landing-Page";
import Quiz from "./Quiz";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";

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
          className="flex flex-col my-11 bg-slate-300 p-12 w-[30rem] h-[38rem] bg-opacity-25 opacity-100 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={borderVariants}
        >
          <h1 className="flex font-bold justify-center text-5xl italic underline">
            SignUp
          </h1>

          <form onSubmit={submitHandler}>
            <label
              htmlFor="email"
              className="flex font-semibold italic text-lg"
            >
              <label
                htmlFor="email"
                className="flex font-semibold italic text-lg"
              >
                <p className="flex items-center gap-2">
                  <MdEmail size={20} />
                  Email{" "}
                </p>
              </label>
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
              <label
                htmlFor="Username"
                className="flex font-semibold italic text-lg"
              >
                <p className="flex items-center gap-2 mt-2">
                  <FaUserTie />
                  Username{" "}
                </p>
              </label>
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
              <label
                htmlFor="password"
                className="flex font-semibold italic text-lg mt-5 "
              >
                <p className="flex items-center gap-2">
                  <FaLock />
                  Password{" "}
                </p>
              </label>
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
             p-2  bg-green-400 rounded-md hover:bg-green-800 shadow-xl shadow-green-300"
              type="submit"
              to={"/LandingPage"}
            >
              Create new account{" "}
            </button>

            {/*       
              <Link
                className="flex font-semibold mt-3 italic cursor-pointer p-2 text-lg"
                to={"/forgotPassword"}
              >
                Forgot password
              </Link> */}

            <div className="flex ">
              <span className="mt-6 italic text-xl">
                Already have an account
              </span>
              <Link
                className="mt-3 flex font-semibold italic cursor-pointer p-3 text-xl"
                to={"/Login"}
              >
                Login
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </React.Fragment>
  );
};
export default Signin;
