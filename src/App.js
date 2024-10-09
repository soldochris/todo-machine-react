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

function useLocalStorage(itemsName, initialValue) {
	const localStorageItems = localStorage.getItem(itemsName);
	let parsedItems;

	if(localStorageItems){
		parsedItems = JSON.parse(localStorageItems);
	}else{
		localStorage.setItem(itemsName,JSON.stringify(initialValue));
		parsedItems = initialValue;
	}

	const [items, setItems] = React.useState(parsedItems);

	function updateItems(newItems){
		localStorage.setItem(itemsName,JSON.stringify(newItems));
		setItems(newItems);
	}

	return [items, updateItems]
}

function App() {

	const [todos, updateTodos] = useLocalStorage('TODOS_V1', []);
	const [searchValue, setSearchValue] = React.useState("");
	const completedTodos = todos.filter(todo => todo.completed).length;
	const totalTodos = todos.length;
	const searchedTodos = todos.filter(
		(todo) => {
			return todo.text.toLowerCase().includes(searchValue.toLowerCase());
		});

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
