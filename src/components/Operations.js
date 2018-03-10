import React from 'react'
import PropTypes from 'prop-types'
import './Operations.css'

const AddTodoInput = ({ addTodo }) => {
  let buttons =  ['+', '-', '/', 'x']

  const buttonElements = [];
  for (let i = 0; i < buttons.length; i++) {
    buttonElements.push(
      <button  className="defaultButton" label={buttons[i]} >{buttons[i]}</button>
    );
  }
  
  return (
    <div id="operations">
      {buttonElements}      
    </div>
  )
}


AddTodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodoInput
