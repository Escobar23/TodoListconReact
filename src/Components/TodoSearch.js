import React from "react";
import { TodoContext } from "../TodoContext";
import './styles/TodoSearch.css';

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className="TodoSearch-container">
            <input className="TodoSearch" placeholder='Search    '
                value={searchValue}
            onChange={ onSearchValueChange } />
            
        </div>
    )
}

export default TodoSearch;