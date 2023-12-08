import React from 'react'

const ChoiceButton = ({ choice, setUserChoice, gameStep, setGameStep }) => {

  const nextStep = () => {
    setGameStep(gameStep + 1)
  }

  const handleUserChoice = () => {
    setUserChoice(choice)
    nextStep()
  }

  const doNothing = () => {
    //this is just to ensure no errors in case the user tries to click the button after choosing an option
  }

  return (
    <div onClick={gameStep === 1 ? handleUserChoice : doNothing} id={`${choice}`} className={`choice-button ${choice}-button`}>
      <div className="outer-circle">
        <div className="inner-circle">
          <img src={`images/icon-${choice}.svg`} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ChoiceButton