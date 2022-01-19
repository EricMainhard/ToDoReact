import React from 'react'
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <section>  
            {props.children}
        </section>
    )
}

export default TodoList
