import './styles/App.css';
import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AppUi } from './AppUi';

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
		<AppUi
			completedTodos = {completedTodos}
			totalTodos = {totalTodos}
			searchValue = {searchValue}
			setSearchValue = {setSearchValue}
			searchedTodos = {searchedTodos}
			completeTodo = {completeTodo}
			deleteTodo = {deleteTodo}
		/>
  );
}

export default App;
