import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import LandingPage from "./Landing-Page"

function Login() {
  return (
    <React.Fragment>
        <Header />
    <div>
        <h1 className='flex justify-center font-bold text-lg'>Login</h1>
        <Link className='btn bg-green-500 rounded-md hover:bg-green-900 border-black' to ={"/LandingPage"} >Login to Quiz Managment</Link>
    </div>
    </React.Fragment>
  )
}

export default Login