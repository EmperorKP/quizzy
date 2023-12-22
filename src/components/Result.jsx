import React, {useState} from 'react'
import './result.css'

export default function Result(props) {
  const result = props.score
  const totalScore = 5


  return (
   
      <div className='result-container'>
        <p>Your score is {(result/totalScore)*100}%</p>
        <p>You scored {result} out of {totalScore}</p>
        <button onClick={props.resetOption}>Reset</button>
      </div>
    )
  
}

