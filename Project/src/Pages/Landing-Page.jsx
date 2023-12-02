import React from "react"
import { useState } from 'react'
import viteLogo from '/vite.svg'
//import './App.css'

function LandingPage () {
 const [count, setCount] = useState(0)
  return (
    <>
    <div>
        <div>
         <h1 className='wrapper flex font-bold text-center text-7xl'>
         Welcome to Quiz Managment
         </h1>
       </div>
       
       <div>
             <h2 className='flex'>Instructions:</h2>
             <ol>
              <li>Here you have 5 subjects in list.</li>
              <li> Each of subject has 50 multiple choices one after another.</li>
              <li>Each question has four options. You can choose only one option.</li> 
              <li>Five points is awarded for correct answer.</li>
              <li>You can review and change answers before the quiz finished.</li>
              <li>The result will be declared at the end of quiz.</li>
              <li>You can also check your rank on LeaderBoard.</li>
             </ol>
       </div>
       
       <div className='container flex text-2xl text-left justify-end'>
        Developed by Muhammad Taraz
       </div>
    </div>
    </>
  )
}

export default LandingPage
