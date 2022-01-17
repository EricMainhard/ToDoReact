import React from 'react'

function TodoItem({task,completed}) {
    return (
        <div className='todoItem'>
            <i className='symbol'>{completed === true ? '❎' : '✅'}</i>
            <p className={completed === true ? 'complete' : 'pending'}>{task}</p>
        </div>
    )
}

export default TodoItem
