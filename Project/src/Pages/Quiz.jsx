import React from 'react'
import LandingPage from './Landing-Page'
import { Link } from 'react-router-dom'
import EngQuestions from './EngQuestions'
import MathsQuestions from './MathsQuestions'
import IslamiatQuestions from './IslamiatQuestions'
import GKQuestions from './GKQuestions'
import CompQuestions from './CompQuestions'

function Quiz() {
  return (
    <div className='container1 h-[100vh] xl:[100vh] lg:h-[100vh] md:h-[100vh] sm:h-[100vh]'>
       
          <div className='flex justify-center'>
            <Link 
            className='flex justify-center font-semibold text-lg italic mt-12 h-11 w-28 items-center p-2 bg-green-400 rounded-md hover:bg-green-900 border-black'
              to = {"/EngQuestions"}>English</Link>  
          </div>

          <div className='flex justify-center mt-3'>
            <Link className='flex justify-center font-semibold text-lg italic mt-12 h-11 w-28 items-center p-2 bg-green-400 rounded-md hover:bg-green-900 border-black' 
            to = {"/MathsQuestions"}>Maths</Link>  
          </div>

          <div className='flex justify-center mt-3'>
            <Link className='flex justify-center font-semibold text-lg italic mt-12 h-11 w-28 items-center p-2 bg-green-400 rounded-md hover:bg-green-900 border-black' 
            to = {"/IslamiatQuestions"}>Islamiat</Link>  
          </div>  

          <div className='flex justify-center mt-3'>
            <Link className='flex justify-center font-semibold text-lg italic mt-12 h-11 w-28 items-center p-2 bg-green-400 rounded-md hover:bg-green-900 border-black' 
            to = {"/GKQuestions"}>GK</Link>  
          </div>

          <div className='flex justify-center mt-3'>
            <Link className='flex justify-center font-semibold text-lg italic mt-12 h-11 w-28 items-center p-2 bg-green-400 rounded-md hover:bg-green-900 border-black'
             to = {"/CompQuestions"}>Computer</Link>  
          </div>
      


      
    </div>
  )
}

export default Quiz 