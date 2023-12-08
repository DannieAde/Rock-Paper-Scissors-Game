import React from 'react'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Result from './Result';
import StepOneRPSLS from '../RPSLS Components/StepOneRPSLS';

const GameDisplay = ({ score, setScore, gameStep, setGameStep, setUserChoice, userChoice, setComputerChoice, computerChoice, handleComputerChoice, handleVerdict, verdict, setVerdict, gameChoice, handleRPSLSVerdict, handleComputerChoiceRPSLS }) => {

  switch (gameStep) {
    case 1:
      if (gameChoice === 'rps') {
        return <StepOne gameStep={gameStep} setGameStep={setGameStep} setUserChoice={setUserChoice} />
      } else {
        return <StepOneRPSLS gameStep={gameStep} setGameStep={setGameStep} setUserChoice={setUserChoice} />
      }
    case 2:
      return <StepTwo gameChoice={gameChoice} handleComputerChoiceRPSLS={handleComputerChoiceRPSLS} gameStep={gameStep} setGameStep={setGameStep} userChoice={userChoice} computerChoice={computerChoice} handleComputerChoice={handleComputerChoice} />
    case 3:
      return <StepThree gameChoice={gameChoice} gameStep={gameStep} setGameStep={setGameStep} userChoice={userChoice} computerChoice={computerChoice} handleVerdict={handleVerdict} handleRPSLSVerdict={handleRPSLSVerdict} />
    case 4:
      return <Result setComputerChoice={setComputerChoice} setGameStep={setGameStep} userChoice={userChoice} computerChoice={computerChoice} verdict={verdict} handleVerdict={handleVerdict} setVerdict={setVerdict} setScore={setScore} score={score} />
    default:
      <StepOne gameStep={gameStep} setGameStep={setGameStep} setUserChoice={setUserChoice} />
      break;
  }
}

export default GameDisplay