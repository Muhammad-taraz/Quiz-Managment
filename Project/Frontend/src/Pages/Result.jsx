import React from 'react'
import '../Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'

export default function Result() {
  
  function onRestart () {
    console.log("Restart")
  }
  
  return (
   <div className='container'>
   
     <h1 className="flex font-bold justify-center mt-5 text-5xl italic underline">
      Result
      </h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>Daily Tution</span>
        </div>

        <div className='flex'>
          <span>Total Quiz Points</span>
          <span className='bold'>200</span>
        </div>

        <div className='flex'>
          <span>Total question</span>
          <span className='bold'>20</span>
        </div>

        <div className='flex'>
          <span>Total attempts</span>
          <span className='bold'>12</span>
        </div>

        <div className='flex'>
          <span>Total Earn Points</span>
          <span className='bold'>92</span>
        </div>

        <div className='flex'>
          <span>Quiz Result</span>
          <span className='bold'>Passed</span>
        </div>
      
      </div>

      <div className='start'>
        <Link className='btn' to = {"/LandingPage"} onClick={onRestart}>Restart</Link>
      </div>

       <div className='container mt-5'>
         <ResultTable />
       </div>

   </div>
  )
}
