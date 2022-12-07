import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const TodoContext = React.createContext()

function TodoProvider(props) {
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false)
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    let totalTodos = todos.length

    let searchedTodos = [];

    if (searchValue.length <= 1) {
    
        searchedTodos = todos

    } else {

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()   
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)

        })
    
    }

    const addTodo = (text) => {
        
        const newTodos = [...todos]
        newTodos.push({
            completed:false,
            text
        });
        saveTodos(newTodos)
    }
    

    const completeTodo = (text) => {
        // if (todos.length === 1) {
        
        //     let todoIndex = todos[0].findIndex(todo => todo.text === text)
        //     let newTodosFake = [...todos]
        //     let newTodos = newTodosFake[0]
        //     newTodos[todoIndex].completed = true
        //     saveTodos(newTodos)
        // } else {
        //     let newTodos = [];
        //     let todoIndex = todos.findIndex(todo => todo.text === text)
        //     let newTodosFake = [...todos]
        //     newTodosFake.length === 3 ? newTodos = newTodosFake : newTodos = newTodosFake[0][0]
        //     newTodos[todoIndex].completed = true
        // }
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        if (todos.length === 1) {
            console.log(todos)
            const newTodosFake = [...todos]
            const newTodos = newTodosFake
            newTodos.splice(0, 1)
            saveTodos(newTodos)

            //const todoIndex = todos.findIndex(todo => todo.text === text);
            //const newTodos = [...todos];
            //newTodos.splice(todoIndex, 1);
            //saveTodos(newTodos);
            
        } else {
            const todoIndex = todos.findIndex(todo => todo.text === text)
            const newTodosFake = [...todos]
            const newTodos = newTodosFake
            newTodos.splice(todoIndex, 1)
            saveTodos(newTodos)
        }
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            addTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };