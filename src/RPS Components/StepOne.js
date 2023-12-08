import React from 'react'
import ChoiceButton from './ChoiceButton'

const StepOne = ({gameStep, setGameStep, setUserChoice}) => {
  return (
    <div className='game-display-container'>
      <div className='game-display'>
        <ChoiceButton setUserChoice={setUserChoice} gameStep={gameStep} setGameStep={setGameStep} choice={'paper'} />
        <ChoiceButton setUserChoice={setUserChoice} gameStep={gameStep} setGameStep={setGameStep} choice={'scissors'} />
      </div>
      <ChoiceButton setUserChoice={setUserChoice} gameStep={gameStep} setGameStep={setGameStep} choice={'rock'} />
    </div>
  )
}

export default StepOne