import React from "react"
import Header from "../Header"
import { Link } from 'react-router-dom'
import LandingPage from "./Landing-Page"



function Signup() {
  return (
    <React.Fragment>
    <Header />
    <div>
        <h1>Signup</h1>
        <Link className='btn bg-green-500 rounded-md hover:bg-green-900 border-black' to ={"/LandingPage"} >
          Create an Account
        </Link>
    </div>
    </React.Fragment>
  )
}

export default Signup