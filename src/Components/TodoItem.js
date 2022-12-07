import React from "react";
import './styles/TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'icon-check--active'}`}
            onClick={props.onComplete}><img className="todoIcon" src="/check-mark24.png" alt="check"></img></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{ props.text }</p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}><img className="todoIcon" src="x-mark24.png" alt="x"></img></span>
        </li>
        )
}

export default TodoItem;