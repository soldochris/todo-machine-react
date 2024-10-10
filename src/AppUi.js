import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from './components/TodoItem/TodoItem';

function AppUi({
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