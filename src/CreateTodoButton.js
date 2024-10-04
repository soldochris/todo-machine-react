import './CreateTodoButton.css';

function CreateTodoButton(){
	return(
		<button
			onClick={
				(event) => { 
					console.log('Click!');
					console.log(event.target);
				}
			}
		>
			+
		</button>
	);
}

export { CreateTodoButton };
