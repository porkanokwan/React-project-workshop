import React from 'react'

function InputTodo({handleSubmit, inputTodo, handleInputTodo}) {
  const handleFocus = (e) => {
    e.target.classList.add("focus")
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      name="todo" 
      placeholder='What need to done?' 
      value={inputTodo} 
      onChange={handleInputTodo} 
      onFocus={handleFocus}
      />
  </form>
  )
}

export default InputTodo