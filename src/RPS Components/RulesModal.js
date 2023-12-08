import React from 'react'

const RulesModal = ({ toggleShowRules }) => {
  return (
    <div className="rules-container">
      <div className='rules-modal'>
        <div className="modal-head">
          <h1>RULES</h1>
          <img onClick={toggleShowRules} className='icon-close' src="images/icon-close.svg" alt="" />
        </div>
        <img className='images-rules' src="images/image-rules.svg" alt="" />
      </div>
    </div>
    
  )
}

export default RulesModal