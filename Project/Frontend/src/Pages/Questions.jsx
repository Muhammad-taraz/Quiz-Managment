import React, { useEffect, useState } from 'react'
import data from './data'

export default function Questions() {

   const [checked, setChecked] = useState(undefined)

   useEffect(() => {
    console.log("question")
   })

  function onSelect() {
    setChecked(true)  
    console.log("radio button change")
  }
  return (
    <div>
      <h5 className="flex font-bold justify-center mt-5 text-5xl italic underline">{question.question}</h5>

      <ul key={question.id}>
       {
        question.options.map((q, i) => (
          <li key={i}>
          <input type='radio' value={checked} name='options' 
          id={`q${i}-options`} onChange={onSelect()} />
          <label htmlFor={`q${i}-options`} className="flex font-semibold italic text-lg">{q}</label>
          <div className='checked flex border-[2px]'></div>
        </li>
        ))
       }
      </ul>
    </div>
  )
}
