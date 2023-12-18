import React, { useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import LandingPage from "./Landing-Page";
import Quiz from "./Quiz";

const Login = () => {
  // const [email,setEmail] =  useState("")
  // const [password,setPassword] =  useState("")

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="flex justify-center flex-col items-center mt-12 gap-11">
        <h1 className="flex font-bold justify-center mt-5 text-5xl italic underline">
          Login
        </h1>

        <form
          className="flex flex-col my-11 bg-slate-300 p-12  w-[30rem] h-[35rem] rounded-lg"
          onSubmit={submitHandler}
        >
          <label htmlFor="email" className="flex font-semibold italic text-lg">
            Email
          </label>

          <input
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
            Password
          </label>

          <input
            type="password"
            placeholder="password"
            name="password"
            className="flex w-[24rem] mt-5 italic p-2 my-1 border-[4px] rounded-lg"
            value={data.password}
            onChange={handleValue}
          />

          <Link
            className="flex font-semibold justify-center text-lg italic mt-12 h-11 w-28 
             p-2 bg-green-400 rounded-md hover:bg-green-900 border-black"
            type="submit"
            to={"/LandingPage"}
          >
            Login{" "}
          </Link>
          <div className="flex justify-between mt-12 w-[100%]">
            <Link
              className="flex font-semibold mt-3 italic cursor-pointer p-3 text-lg"
              to={"/forgotPassword"}
            >
              Forgot password
            </Link>
            <Link
              className="flex font-semibold mt-3 italic cursor-pointer p-3 text-lg"
              to={"/signUp"}
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default Login;
