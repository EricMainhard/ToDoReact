import React from 'react'

function TodoItem({task,completed,completeTodos,dataset,deleteTodos}) {
    return (
        <div className='todoItem'>
            <div className="todo-controls">
                <i className='symbol complete-symbol' onClick={()=>{completeTodos(dataset)}}>
                    {!completed ? '✅' : '🔄'}</i>
                <i className='symbol delete-symbol' onClick={()=>{deleteTodos(dataset)}}>❎</i>
            </div>
            <p className={completed === true ? 'complete' : 'pending'}>{task}</p>
        </div>
    )
}

export default TodoItem
