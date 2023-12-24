import React, { useEffect, useState } from 'react'
import data from './data'
import { useNavigate } from 'react-router-dom'
 
export default function Questions() {

   const [currentIndex, setCurrentIndex] = useState(0);

   const navigate = useNavigate()

  function onSelect() {
  
    console.log("radio button change")
  }

  const onPrev = () => {
    if(currentIndex >= 1) {
      setCurrentIndex((prev) => prev-1)
    }
    else{
      alert("Wrong Click");
    }
  }

   const onNext = () => {
      if(currentIndex >= data.length-1){
        navigate("/result")
        return;
      }
      setCurrentIndex((prev) => prev+1)
   }

  return (
    <>
       <h4 className='flex font-bold justify-center mt-5 text-5xl italic underline'>Simple Questions</h4>

    <div className='flex flex-col ml-12 mt-[5rem]'>
      <h5 className="flex font-semibold mt-5 text-2xl italic underline">{data[currentIndex].question}
      </h5>

      <ul>
       {
        data[currentIndex].options.map((q, i) => (
          <li className='mt-2 flex' key={i}>
          <input type='radio' name='options'
          id={`q${i}-options`} onChange={() => onSelect()} />
          <label htmlFor={`q${i}-options`} className="flex font-semibold italic text-lg ml-2">{q}</label>
        </li>
        ))
       }
      </ul>

     <div className='flex gap-[12rem] mt-12'>
       <button 
        className='prev mt-2 p-2 rounded-lg text-black bg-green-400 hover:bg-green-900'
        onClick={onPrev}>Previous</button>
        
        <button 
        className='next mt-2 p-2 rounded-lg text-black bg-green-400 hover:bg-green-900'
        onClick={onNext}>Next</button>
        </div>

    </div>
    </>
  )
}
