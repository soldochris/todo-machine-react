import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from './components/TodoItem/TodoItem';

function AppUi({
	loading,
	error,
  completedTodos, 
  totalTodos, 
  searchValue, 
  setSearchValue, 
  searchedTodos, 
  completeTodo, 
  deleteTodo
}){
  return (
    <>
    <TodoCounter completed={completedTodos} total={totalTodos} />
    <TodoSearch
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
    />
    <TodoList>
			{loading && <p>Loading...</p> }
			{error && <p>Something went wrong! Please try again.</p>}
			{(!loading && searchedTodos.length === 0) && <p>There aren't TODOs, create one.</p>}

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
  )
}

export { AppUi };
