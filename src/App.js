import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
	{text: 'Cut Onions', completed: false},
	{text: 'Read a Book', completed: false},
	{text: 'Workout', completed: true},
	{text: 'Study JS', completed: true}
];

function App() {
  return (
    <div className="App">
			<TodoCounter completed={3} total={5} />
			<TodoSearch/>
			<TodoList>
				{defaultTodos.map(todo => (
					<TodoItem 
						key={todo.text} 
						text={todo.text} 
						completed={todo.completed}
					/>
				))}
			</TodoList>
			<CreateTodoButton/>
    </div>
  );
}

export default App;
