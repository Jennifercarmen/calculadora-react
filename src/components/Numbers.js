import React from 'react'
import PropTypes from 'prop-types'
import './Numbers.css'

const AddTodoInput = ({ addTodo }) => {
  let buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

  const buttonElements = [];
  for (let i = 0; i < buttons.length; i++) {
    buttonElements.push(
      <button  className="defaultButton" label={buttons[i]} >{buttons[i]}</button>
    );
  }
  
  return (
    <div id="numbers">
      {buttonElements}
      <button label="="  className="greenBtn">=</button>
      
    </div>
  )
}


AddTodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodoInput
