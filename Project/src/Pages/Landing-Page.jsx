import React from "react"
import { useState } from 'react'
import viteLogo from '/vite.svg'
import '../App.css'
import { Link } from "react-router-dom"

function LandingPage () {
 const [count, setCount] = useState(0)
  return (
    <React.Fragment>
    <div className="container4 text-white h-[100vh]">
        <div>
         <h1 className='wrapper flex font-bold text-center text-7xl italic underline'>
         Welcome to Quiz Managment
         </h1>
       </div>
       
       <div>
             <h2 className='flex font-semibold text-5xl italic mt-11'>Instructions:</h2>
            
            <div className="flex mt-5 text-3xl italic pl-48">
             <ol>
              <li  className="pb-3">1.Here you have 5 subjects in list.</li>
              <li  className="pb-3">2.Each of subject has 50 multiple choices one after another.</li>
              <li  className="pb-3">3.Each question has four options. You can choose only one option.</li> 
              <li  className="pb-3">4.Five points is awarded for correct answer.</li>
              <li  className="pb-3">5.You can review and change answers before the quiz finished.</li>
              <li  className="pb-3">6.The result will be declared at the end of quiz.</li>
              <li  className="pb-3">7.You can also check your rank on LeaderBoard.</li>
             </ol>
             </div>

        </div> 
      
       <div className="btn items-center"> 
          <Link className='flex font-semibold text-lg italic mt-12 h-11 w-28 items-center p-2 bg-green-400 rounded-md hover:bg-green-900 border-black'
            to = {"/Quiz"}>
            Get Started
          </Link> 
       </div>

       <div className='flex text-3xl font-semibold italic text-left justify-end'>
        Developed by Muhammad Taraz
       </div>

      
    </div>
    </React.Fragment>
  )
}

export default LandingPage
