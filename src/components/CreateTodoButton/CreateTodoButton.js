import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}){
	return(
		<button
			onClick={
				() => { 
					setOpenModal(state => !state);
				}
			}
		>
			+
		</button>
	);
}

export { CreateTodoButton };
