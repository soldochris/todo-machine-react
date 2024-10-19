import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodosLoading } from "./components/TodosLoading/TodosLoading";
import { TodosError } from "./components/TodosError/TodosError";
import { EmptyTodos } from "./components/EmptyTodos/EmptyTodos";
import { TodoContext } from "./context/TodoContext";
import { Modal } from "./components/Modal/Modal";
import { TodoForm } from "./components/TodoForm/TodoForm";
import React from "react";

function AppUi() {
  const { 
    loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal 
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/>
      { openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

    </>
  );
}

export { AppUi };
