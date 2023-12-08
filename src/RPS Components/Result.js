import React, { useEffect } from 'react'
import ChoiceButton from './ChoiceButton'

const Result = ({ score, setScore, setGameStep, userChoice, computerChoice, verdict, setVerdict, setComputerChoice }) => {

  useEffect(() => {
    setTimeout( () => verdict === 'You Win' && setScore(score + 1), 1100)
  }, [])

  const headerStyle = {
    color: 'white',
    marginBottom: '2rem'
  }

  const playAgain = () => {
    setGameStep(1)
    setComputerChoice('')
    setVerdict('')
  }

  return (
    <div className='game-display-container no-background'>
      <div className='game-display'>
        <div className='game-display-choice user'>
          <h2 style={headerStyle}>You Picked</h2>
          <ChoiceButton setGameStep={setGameStep} choice={userChoice} />
        </div>
        {verdict && <div className='result-info'>
          <h1>{verdict}</h1>
          <button onClick={playAgain}>PLAY AGAIN</button>
        </div>}
        <div className='game-display-choice computer'>
          <h2 style={headerStyle}>The House Picked</h2>
          <ChoiceButton setGameStep={setGameStep} choice={computerChoice} />
        </div>
      </div>
    </div>
  )
}

export default Result