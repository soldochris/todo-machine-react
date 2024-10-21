import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../context/TodoContext';

function TodoForm(){
  const {
    setOpenModal,
    addTodo,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  function onSubmit(event){
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  function onCancel(){
    setOpenModal(false);
  }

  function onChange(event){
    setNewTodoValue(event.target.value);
  }

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label>Add a new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Write your task here"
      />
      <div>
        <button 
          className="cancel-button-form"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button 
          className="confirm-button-form"
          type='submit'
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export {TodoForm}