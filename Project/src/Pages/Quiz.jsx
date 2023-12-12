import React from 'react'
import LandingPage from './Landing-Page'
import { Link } from 'react-router-dom'

function Quiz() {
  return (
    <>
    <div className='flex justify-around gap-5 mt-5'>
       
      
        <button className='prev mt-2 p-2 rounded-lg text-black bg-green-400 hover:bg-green-900'>Previous</button>
        
        <button className='next mt-2 p-2 rounded-lg text-black bg-green-400 hover:bg-green-900'>Next</button>
      
      </div>
    </>
  )
}

export default Quiz 