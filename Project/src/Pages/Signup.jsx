import React, { useState } from "react"
import Header from "../Header"
import { Link } from 'react-router-dom'
import LandingPage from "./Landing-Page"

const SignUp = ()=>{
    const [userName,setUserName] =  useState("")
    const [email,setEmail] =  useState("")
    const [password,setPassword] =  useState("")
    const submitHandler = (e)=>{
        e.preventDefault();

    }
    return <React.Fragment>
       <h1 className='flex font-bold justify-center mt-5 text-5xl italic underline'>SignUp</h1>
       <form className="flex flex-col my-10 bg-slate-300 p-10" onSubmit={submitHandler}>
       <input type="text" placeholder="username" className="p-2 my-1 border-[2px]" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            
        <input type="email" placeholder="email" className="p-2 my-1 border-[2px]" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" className="p-2 my-1 border-[2px]"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                <Link className="flex font-semibold justify-center text-lg italic mt-12 h-11 w-28 
                  p-2 bg-green-400 rounded-md hover:bg-green-900 border-black" type="submit"
                  to = {"/LandingPage"}>
                        Sign Up
                </Link>
                <div className="flex justify-between my-1">
                    <Link className='flex font-semibold mt-3 italic cursor-pointer p-3 text-lg'
                     to={'/forgotPassword'}>
                    Forgot password
                    </Link>
                  <div className="flex">
                    <span className="mt-6 italic text-lg">
                    Already have an account
                    </span>
                    <Link className='flex font-semibold mt-3 italic cursor-pointer p-3 text-lg'
                     to={'/login'}>
                      Login
                    </Link>
                    </div>
                </div>
       </form>
    </React.Fragment>
}
export default SignUp