import { useState } from 'react';
import './App.css';
import GameDisplay from './RPS Components/GameDisplay';
import RulesModal from './RPS Components/RulesModal';
import ScoreBoard from './RPS Components/ScoreBoard'

function App() {

  const [showRules, setShowRules] = useState(false)
  let [gameStep, setGameStep] = useState(1)

  let [userChoice, setUserChoice] = useState('')
  let [computerChoice, setComputerChoice] = useState('')
  let [verdict, setVerdict] = useState('')
  let [score, setScore] = useState(0)

  const handleComputerChoice = () => {
    let random = Math.floor(Math.random(0, 3) * 3) + 1

    switch (random) {
      case 1:
        setComputerChoice('rock')
        break;
      case 2:
        setComputerChoice('paper')
        break
      case 3:
        setComputerChoice('scissors')
        break
      default:
        setComputerChoice('rock')
        break;
    }
  }

  const toggleShowRules = () => {
    setShowRules(!showRules)
  }

  const handleVerdict = () => {
    if (userChoice === 'rock' && computerChoice === 'scissors') {
      setVerdict('You Win')
    }else if(userChoice === 'rock' && computerChoice === 'rock') {
      setVerdict('Draw')
    } else if(userChoice === 'rock' && computerChoice === 'paper') {
      setVerdict('You Lose')
    }

    if (userChoice === 'paper' && computerChoice === 'rock') {
      setVerdict('You Win')
    }else if(userChoice === 'paper' && computerChoice === 'paper') {
      setVerdict('Draw')
    } else if(userChoice === 'paper' && computerChoice === 'scissors') {
      setVerdict('You Lose')
    }

    if (userChoice === 'scissors' && computerChoice === 'paper') {
      setVerdict('You Win')
    }else if(userChoice === 'scissors' && computerChoice === 'scissors') {
      setVerdict('Draw')
    } else if(userChoice === 'scissors' && computerChoice === 'rock') {
      setVerdict('You Lose')
    }
  }

  return (
    <div className="App">
      <ScoreBoard score={score}/>
      <GameDisplay 
        gameStep={gameStep} 
        setGameStep={setGameStep} 
        userChoice={userChoice}
        setUserChoice={setUserChoice}
        computerChoice={computerChoice}
        handleComputerChoice={handleComputerChoice}
        handleVerdict={handleVerdict}
        setComputerChoice={setComputerChoice}
        verdict={verdict}
        setVerdict={setVerdict}
        score={score}
        setScore={setScore}  
        />
      {showRules && <RulesModal toggleShowRules={toggleShowRules} />}
      <button onClick={toggleShowRules} className='rules'>Rules</button>
    </div>
  );
}

export default App;
