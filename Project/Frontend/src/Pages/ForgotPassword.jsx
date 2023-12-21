import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate();

  const submitHandler = (e) => {
  
    e.preventDefault();
    navigate("/LandingPage")
  
  };
  return (
    <React.Fragment>
      <div className="flex justify-center flex-col items-center mt-12 gap-5">
        <h1 className="flex font-bold justify-center mt-5 text-5xl italic underline">
          Reset password
        </h1>

        <form
          className="flex flex-col my-11 bg-slate-300 p-12 w-[30rem] h-[35rem] rounded-lg"
          onSubmit={submitHandler}
        >
          <label htmlFor="email" className="flex font-semibold italic text-lg">
            Email
          </label>

          <input required
            type="email"
            placeholder="email"
            name="email"
            className="flex w-[24rem] mt-5 italic p-2 my-1 border-[4px] rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Link
            className="flex font-semibold justify-center text-lg italic mt-12 h-11 w-[10rem] p-2
              bg-green-400 rounded-md hover:bg-green-900 border-black"
            type="submit"
            to={"/LandingPage"}
          >
            Reset password{" "}
          </Link>

          <div className="flex justify-between mt-12 w-[100%]">
            <Link
              className="flex font-semibold mt-3 italic cursor-pointer p-3 text-lg"
              to={"/Sgnup"}
            >
              Sign Up
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
      </div>
    </React.Fragment>
  );
};
export default ForgotPassword;
