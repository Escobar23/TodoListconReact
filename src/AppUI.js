import React from 'react';
import { TodoContext } from './TodoContext';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import CreateTodoButton from './Components/CreateTodoButton';
import {Modal} from './Components/Modal'
import { TodoForm } from './Components/TodoForm';
import MyLoader from './Components/Loader';
import { WithoutTodos } from './Components/WithoutTodos';

function AppUI() {

  const {
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal
        } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
      {error && <p>Desespérate, hubo un error...</p>}
      {loading && <MyLoader/>}
      {(!loading && !searchedTodos.length) && <WithoutTodos/>}
            
      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
      </TodoList>

      {openModal && (
        <Modal>
        <TodoForm />
      </Modal>
      )}
      
      <CreateTodoButton setOpenModal={setOpenModal} openModal={ openModal } />
    </React.Fragment>
  );
}

export { AppUI };
    