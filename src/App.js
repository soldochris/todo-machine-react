import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import './App.css';
import React from 'react';

//const defaultTodos = [
//	{text: 'Cut Onions', completed: false},
//	{text: 'Read a Book', completed: false},
//	{text: 'Workout', completed: true},
//	{text: 'Study JS', completed: true}
//];

//const stringifiedTodos = JSON.stringify(defaultTodos);

//localStorage.setItem('TODOS_V1', stringifiedTodos);

function App() {
	const localStorageTodos = localStorage.getItem('TODOS_V1');
	let parsedTodos;


	if(localStorageTodos){
		parsedTodos = JSON.parse(localStorageTodos);
	}else{
		localStorage.setItem('TODOS_V1',JSON.stringify([]));
		parsedTodos = [];
	}

	const [todos, setTodos] = React.useState(parsedTodos);
	const [searchValue, setSearchValue] = React.useState("");
	const completedTodos = todos.filter(todo => todo.completed).length;
	const totalTodos = todos.length;
	const searchedTodos = todos.filter(
		(todo) => {
			return todo.text.toLowerCase().includes(searchValue.toLowerCase());
		});

	function updateTodos(newTodos){
		localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));
		setTodos(newTodos);
	}

	function completeTodo(text){
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(todo => todo.text === text);
		newTodos[todoIndex].completed = true;
		updateTodos(newTodos);
	}
	
	function deleteTodo(text){
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(todo => todo.text === text);
		newTodos.splice(todoIndex, 1);
		updateTodos(newTodos);
	}
  return (
    <>
			<TodoCounter completed={completedTodos} total={totalTodos} />
			<TodoSearch
				searchValue = {searchValue}
				setSearchValue = {setSearchValue}
			/>
			<TodoList>
				{searchedTodos.map(todo => (
					<TodoItem 
						key={todo.text} 
						text={todo.text} 
						completed={todo.completed}
						onComplete={ () => completeTodo(todo.text) }
						onDelete={ ()=> deleteTodo(todo.text) }
					/>
				))}
			</TodoList>
			<CreateTodoButton/>
    </>
  );
}

export default App;
