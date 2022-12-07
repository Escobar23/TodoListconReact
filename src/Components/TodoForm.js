import React, { useState } from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {


    let button = document.getElementById('button')
    const  [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo,
            setOpenModal
            } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
        button.classList.remove('transform')
    }

    const onChange = (event) => {
        event.preventDefault()
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        button.classList.remove('transform')
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TO DO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar las cebollas" />
            <div>
                <button onClick={onCancel} className="Cancel" type='button'>Cancelar</button>
                <button onClick={onSubmit} className="Submit" type='submit'  >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };