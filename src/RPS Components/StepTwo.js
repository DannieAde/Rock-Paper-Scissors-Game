import { useEffect } from 'react'
import React from 'react'
import ChoiceButton from './ChoiceButton'

const StepTwo = ({ userChoice, gameStep, setGameStep, computerChoice, handleComputerChoice, handleComputerChoiceRPSLS, gameChoice }) => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTimeout(() => {gameChoice === 'rps' ? handleComputerChoice() : handleComputerChoiceRPSLS()}, 2000)
    setTimeout(() => setGameStep(3), 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const headerStyle = {
    color: 'white',
    marginBottom: '2rem'
  }

  return (
    <div className='game-display-container no-background'>
      <div className='game-display'>
        <div className='game-display-choice user'>
          <h2 style={headerStyle}>You Picked</h2>
          <ChoiceButton gameStep={gameStep} setGameStep={setGameStep} choice={userChoice} />
        </div>
        <div className='game-display-choice computer'>
          <h2 style={headerStyle}>The House Picked</h2>
          <ChoiceButton gameStep={gameStep} setGameStep={setGameStep} choice={computerChoice} />
        </div>
      </div>
    </div>
  )
}

export default StepTwo