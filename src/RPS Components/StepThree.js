import { useEffect } from 'react'
import React from 'react'
import ChoiceButton from './ChoiceButton'

const StepThree = ({ handleVerdict, userChoice, gameStep, setGameStep, computerChoice }) => {

  useEffect(() => {
    setTimeout(() => handleVerdict(), 500)
    setTimeout(() => setGameStep(4), 700)
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

export default StepThree