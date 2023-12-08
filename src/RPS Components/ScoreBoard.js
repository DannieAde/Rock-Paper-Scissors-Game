import React from 'react'

const ScoreBoard = ({score}) => {
  return (
    <div className='score-board'>
      <img src="images/logo.svg" alt="" />
      <div className='score'>
        <p>Score</p>
        <h2>{score}</h2>
      </div>
    </div>
  )
}

export default ScoreBoard