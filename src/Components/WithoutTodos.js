import './styles/withouttodos.css'


function WithoutTodos() {
    return (
        <main>
            <h2>¡Escribe tu primer To Do!</h2>
            <div className='imgCont'>
                <img className='withoutTodoImg' src='/no-task.png' alt='imagen de una chica con lapiz'></img>
            </div>
        </main>
    )
}

export { WithoutTodos };
