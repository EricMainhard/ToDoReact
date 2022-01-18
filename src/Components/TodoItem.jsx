import React from 'react'
import {HiOutlineReply,HiOutlineCheck, HiX} from "react-icons/hi";

function TodoItem({task,completed,completeTodos,dataset,deleteTodos}) {
    return (
        <div className='todoItem'>
            <div className="todo-controls">
                <i className='icon complete-icon' onClick={()=>{completeTodos(dataset)}}>
                    {!completed ? <HiOutlineCheck/> : <HiOutlineReply/> } 
                </i>
                <i className='icon delete-icon fas fa' onClick={()=>{deleteTodos(dataset)}}>
                    <HiX/>
                </i>
            </div>
            <p className={completed === true ? 'complete' : 'pending'}>{task}</p>
        </div>
    )
}

export default TodoItem
