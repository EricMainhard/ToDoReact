import React from 'react'

function TodoCount({totalTodos,completedTodos}) {
    return (
        <>
            <h2 className='todoCount'>{completedTodos} of {totalTodos} todo's completed {completedTodos > 0 ? '😎' : '🤨'}</h2>
        </>
    )
}

export default TodoCount
