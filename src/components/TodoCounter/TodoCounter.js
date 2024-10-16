import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../context/TodoContext';

function TodoCounter(){
	const {completedTodos, totalTodos} = React.useContext(TodoContext);

	return(
		<h1>
			You have completed {completedTodos} of {totalTodos} TODOS
		</h1>
	);
}

export { TodoCounter };
