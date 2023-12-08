import React from 'react'
import ChoiceButton from '../RPS Components/ChoiceButton'

const StepOne = ({ gameStep, setGameStep, setUserChoice }) => {
  return (
    <div className='game-display-container rpsls'>
      <ChoiceButton setUserChoice={setUserChoice} gameStep={gameStep} setGameStep={setGameStep} choice={'scissors'} />
      <ChoiceButton setUserChoice={setUserChoice} gameStep={gameStep} setGameStep={setGameStep} choice={'spock'} />
      <ChoiceButton setUserChoice={setUserChoice} gameStep={gameStep} setGameStep={setGameStep} choice={'paper'} />
      <ChoiceButton setUserChoice={setUserChoice} gameStep={gameStep} setGameStep={setGameStep} choice={'lizard'} />
      <ChoiceButton setUserChoice={setUserChoice} gameStep={gameStep} setGameStep={setGameStep} choice={'rock'} />
    </div>
  )
}

export default StepOne