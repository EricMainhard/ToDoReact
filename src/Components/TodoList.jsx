import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <section className='todoList'>  
            {props.children}
        </section>
    )
}

export default TodoList
