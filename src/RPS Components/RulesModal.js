import React from 'react'

const RulesModal = ({ toggleShowRules, gameChoice }) => {
  return (
    <div className="rules-container">
      <div className='rules-modal'>
        <div className="modal-head">
          <h1>RULES</h1>
          <img onClick={toggleShowRules} className='icon-close' src="images/icon-close.svg" alt="" />
        </div>
        {gameChoice === 'rps' ? <img className='images-rules' src="images/image-rules.svg" alt="" /> : <img className='images-rules' src="images/image-rules-bonus.svg" alt="" />}
      </div>
    </div>
    
  )
}

export default RulesModal