import React, { useState } from "react"
import { Link } from "react-router-dom"
const ForgotPassword = ()=>{
    const [email,setEmail] =  useState("")
    const submitHandler = (e)=>{
        e.preventDefault();

    }
    return <React.Fragment>
        
       <form className="flex flex-col my-10 bg-slate-300 p-10" onSubmit={submitHandler}>
            <input type="email" placeholder="email" className="p-2 my-1 border-[2px]" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button className="mt-5 p-2 rounded-lg w-fit text-black bg-green-400 hover:bg-green-900" type="submit">
                        Reset Password
                </button>
                <div className="flex justify-between my-1">
                    <Link className='flex font-semibold mt-3 italic cursor-pointer p-3 text-lg' to={'/login'}>
                    Login
                    </Link>
                    <Link className='flex font-semibold mt-3 italic cursor-pointer p-3 text-lg' to={'/signUp'}>
                    Sign Up
                    </Link>
                </div>
       </form>
    </React.Fragment>
}
export default ForgotPassword