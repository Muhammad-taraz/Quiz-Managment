import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  // const [email,setEmail] =  useState("")
  // const [password,setPassword] =  useState("")

  const [data, setData] = useState({
    email: "",
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

    try {
      const response=await axios.post("http://localhost:5924/api/login",{
        email: data.email,
        password: data.password
      }); 
      navigate("/LandingPage");
      
    } catch (error) {
      alert("Account not found");
    }
  };
  return (
    <React.Fragment>
      <div className="container1 flex justify-center items-center">
        <motion.div
          className="flex flex-col my-11 bg-slate-100 p-11 w-[30rem] h-[32rem] bg-opacity-25 opacity-100 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={borderVariants}
        >
          <h1 className="flex font-bold justify-center font-orbitron flex-shrink-0 mt-[-1px] text-5xl italic underline">
            Login
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
              className="flex font-semibold justify-center text-xl italic mt-12 h-11 w-28 
             p-2 bg-green-400 rounded-md hover:bg-green-800 shadow-xl shadow-green-300 border-black"
              type="submit"
              to={"/LandingPage"}
            >
              Login{" "}
            </button>
            {/*       
              <Link
                className="flex font-semibold mt-3 italic cursor-pointer p-2 text-lg"
                to={"/forgotPassword"}
              >
                Forgot password
              </Link> */}

            <div className="flex">
              <span className="mt-8 italic text-xl">Don't have an account</span>
              <Link
                className="mt-5 flex font-semibold italic cursor-pointer p-3 text-xl"
                to={"/SignUp"}
              >
                SignUp
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </React.Fragment>
  );
};
export default Login;
