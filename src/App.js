import { useState } from 'react';
import './App.css';
import GameDisplay from './RPS Components/GameDisplay';
import RulesModal from './RPS Components/RulesModal';
import ScoreBoard from './RPS Components/ScoreBoard'

function App() {

  let [gameChoice, setGameChoice] = useState()
  let [showGameChoice, setShowGameChoice] = useState(true)

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

  const handleComputerChoiceRPSLS = () => {
    let random = Math.floor(Math.random(0, 5) * 5) + 1

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
      case 4:
        setComputerChoice('lizard')
        break
      case 5:
        setComputerChoice('spock')
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

  const handleRPSLSVerdict = () => {
    if (userChoice === 'rock') {
      switch (computerChoice) {
        case 'scissors':
          setVerdict('You win')
          break;
        case 'lizard':
          setVerdict('You win')
          break
        case 'rock':
          setVerdict('Draw')
          break
        case 'paper':
          setVerdict('You Lose')
          break
        case 'spock':
          setVerdict('You Lose')
          break
        default:
          setVerdict('There was an error')
          break;
      }
    }

    if (userChoice === 'paper') {
      switch (computerChoice) {
        case 'rock':
          setVerdict('You win')
          break;
        case 'spock':
          setVerdict('You win')
          break
        case 'paper':
          setVerdict('Draw')
          break
        case 'scissors':
          setVerdict('You Lose')
          break
        case 'lizard':
          setVerdict('You Lose')
          break
        default:
          setVerdict('There was an error')
          break;
      }
    }

    if (userChoice === 'scissors') {
      switch (computerChoice) {
        case 'paper':
          setVerdict('You Win')
          break;
        case 'lizard':
          setVerdict('You Win')
          break
        case 'scissors':
          setVerdict('Draw')
          break
        case 'rock':
          setVerdict('You Lose')
          break
        case 'spock':
          setVerdict('You Lose')
          break
        default:
          setVerdict('There was an error')
          break;
      }
    }

    if (userChoice === 'spock') {
      switch (computerChoice) {
        case 'scissors':
          setVerdict('You Win')
          break;
        case 'rock':
          setVerdict('You Win')
          break
        case 'spock':
          setVerdict('Draw')
          break
        case 'paper':
          setVerdict('You Lose')
          break
        case 'lizard':
          setVerdict('You Lose')
          break
        default:
          setVerdict('There was an error')
          break;
      }
    }

    if (userChoice === 'lizard') {
      switch (computerChoice) {
        case 'spock':
          setVerdict('You win')
          break;
        case 'paper':
          setVerdict('You win')
          break
        case 'lizard':
          setVerdict('Draw')
          break
        case 'rock':
          setVerdict('You Lose')
          break
        case 'scissors':
          setVerdict('You Lose')
          break
        default:
          setVerdict('There was an error')
          break;
      }
    }
  }

  const chooseGame = (e) => {
    setGameChoice(e.target.className)
    setShowGameChoice(false)
  }

  return (
    <div className="App">
      <div style={{visibility: showGameChoice ? 'visible' : 'hidden'}} className='choose-game'>
        <h1>Hello User</h1>
        <p>Select a game</p>
        <div className="game-choice">
          <button onClick={(e) => chooseGame(e)} className='rps'>Rock Paper Scissors</button>
          <button onClick={(e) => chooseGame(e)} className='rpsls'>Rock Paper Scissors Lizard Spock</button>
        </div>
      </div>
      <ScoreBoard score={score}/>
      <GameDisplay 
        gameStep={gameStep} 
        setGameStep={setGameStep} 
        userChoice={userChoice}
        setUserChoice={setUserChoice}
        computerChoice={computerChoice}
        handleComputerChoice={handleComputerChoice}
        handleComputerChoiceRPSLS={handleComputerChoiceRPSLS}
        handleVerdict={handleVerdict}
        handleRPSLSVerdict={handleRPSLSVerdict}
        setComputerChoice={setComputerChoice}
        verdict={verdict}
        setVerdict={setVerdict}
        score={score}
        setScore={setScore} 
        gameChoice={gameChoice} 
        />
      {showRules && <RulesModal toggleShowRules={toggleShowRules} gameChoice={gameChoice} />}
      <button style={{display: showGameChoice ? 'none' : 'block'}} onClick={toggleShowRules} className='rules'>Rules</button>
    </div>
  );
}

export default App;
