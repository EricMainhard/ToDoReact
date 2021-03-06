import React,{useContext} from 'react'
import { TodoContext } from '../TodoContext'

function TodoCount() {
    const {totalTodos,completedTodos} = useContext(TodoContext)
    return (
        <>
            <h2 className='todoCount'>{completedTodos} of {totalTodos} todo's completed {completedTodos > 0 ? '๐' : '๐คจ'}</h2>
        </>
    )
}

export default TodoCount
