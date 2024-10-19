import './TodoForm.css';

function TodoForm(){
  return (
    <form className="form-container" onSubmit={(event) =>{
      event.preventDefault();
    }}>
      <label>Add a new TODO</label>
      <textarea 
        placeholder="Write your task here"
      />
      <div>
        <button 
          className="cancel-button-form"
          type=""
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