import React, { useEffect } from 'react'
import LandingPage from './Landing-Page'
import { Link } from 'react-router-dom'
import Questions from './Questions'

// import redux store
import {useSelector} from 'react-redux';

export default function Quiz() {

const state = useSelector(state => state)

useEffect() => {
  console.log(state)
}

function onPrev() {
  console.log("on previous click")
}

function onNext() {
  console.log("on next click")
}

  return (
    <>
    <div className='flex justify-around gap-5 mt-5'>

      <Questions /> 
      
        <button 
        className='prev mt-2 p-2 rounded-lg text-black bg-green-400 hover:bg-green-900'
        onClick={onPrev}>Previous</button>
        
        <button 
        className='next mt-2 p-2 rounded-lg text-black bg-green-400 hover:bg-green-900'
        onClick={onNext}>Next</button>
      
      </div>
    </>
  )
}
 
 