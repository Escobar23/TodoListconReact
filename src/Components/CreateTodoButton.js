import React from "react";
import './styles/CreateTodoButton.css'
import { TodoContext } from "../TodoContext";

    

function CreateTodoButton(props) {

    const { openModal } = React.useContext(TodoContext)


    let button = document.getElementById('button')
    const onClickButton = () => {
        if (openModal) {
             
            button.classList.remove('transform')

        } else {
            
            button.classList.add('transform')
             
         }
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <div className="CreateTodoButton">
            <button
                className="btn"
                id="button"
                onClick={onClickButton}>+
            </button>
        </div>
    )
}
export default CreateTodoButton;