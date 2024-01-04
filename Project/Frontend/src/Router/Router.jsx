import React from 'react'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage"
import SignUp from "../Pages/SignUp"
import Login from "../Pages/Login"
import LandingPage from "../Pages/Landing-Page"
import Quiz from "../Pages/Quiz"
import ForgotPassword from "../Pages/ForgotPassword"
import Result from '../Pages/Result';


export default function Router() {
  return (
    <>
    <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/LandingPage" element={<LandingPage/>} />
        <Route path="/Quiz" element={<Quiz/>} />
        <Route path="/Result" element={<Result/>} />

      </Routes>
    
    
    </>
  )
}
