import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import {Helmet} from "react-helmet";
import axios from 'axios';
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
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
   
    const response=await axios.post("http://localhost:5924/api/signUp",{
      username: data.username,
      email: data.email,
      password: data.password
    });
   

    navigate("/LandingPage");
  };
  return (
    <React.Fragment>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Sign Up</title>
            </Helmet>
      <div className="container2 flex justify-center items-center">
        <motion.div
          className="flex flex-col my-11 bg-slate-300 p-12 lg:w-[30rem] md:[20rem] sm:[12rem] lg:h-[38rem] md:h-[30rem] sm:h-[20rem] bg-opacity-25 opacity-100 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={borderVariants}
        >
          <h1 className="flex font-bold justify-center lg:text-5xl md:text-3xl sm:text-xl italic underline">
            SignUp
          </h1>

          <form onSubmit={submitHandler}>
            <label
              htmlFor="email"
              className="flex font-semibold italic lg:text-lg md:text-sm sm:text-xs"
            >
              <label
                htmlFor="email"
                className="flex font-semibold italic lg:text-lg md:text-sm sm:text-xs"
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
              className="flex lg:w-[24rem] md:w-[18rem] sm:w-[10rem] lg:mt-5 md:mt-2 sm:mt-0 italic p-2 my-1 border-[4px] rounded-lg"
              value={data.email}
              onChange={handleValue}
            />

            <label
              htmlFor="Username"
              className="flex font-semibold italic text-lg"
            >
              <label
                htmlFor="Username"
                className="flex font-semibold italic lg:text-lg md:text-sm sm:text-xs"
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
              className="flex lg:w-[24rem] md:w-[18rem] sm:w-[10rem] lg:mt-5 md:mt-2 italic p-2 my-1 border-[4px] rounded-lg"
              value={data.username}
              onChange={handleValue}
            />

            <label
              htmlFor="password"
              className="flex font-semibold italic lg:text-lg md:text-sm sm:text-xs lg:mt-5 md:mt-2 sm:mt-0" 
            >
              <label
                htmlFor="password"
                className="flex font-semibold italic lg:text-lg md:text-sm sm:text-xs lg:mt-5 md:mt-2 sm:mt-0"
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
              className="flex lg:w-[24rem] md:w-[18rem] sm:w-[10rem] lg:mt-5 md:mt-2 sm:mt-0 italic p-2 my-1 border-[4px] rounded-lg"
              value={data.password}
              onChange={handleValue}
            />

            <button
              className="font-semibold lg:text-lg md:text-xs sm:text-xs italic lg:mt-12 md:mt-5 sm:mt-4 lg:h-[3rem] md:h-[2rem] sm:h-[1rem] lg:w-[12rem] md:w-[8rem] sm:w-[6rem]
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
              <span className="mt-6 italic lg:text-xl md:text-xsm">
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
