import React from 'react'
import TodoItem from './TodoItem';

const todos = [
    {task: "Comprar pan", completed: false},
    {task: "Retirar orden", completed: false},
    {task: "Ver clase de Platzi", completed: true}
];

function TodoList() {
    return (
        <>
            {todos.map((todo,i) => {
                return(
                    <TodoItem key={i} task={todo.task} completed={todo.completed}/>
                )
            })} 
        </>
    )
}

export default TodoList
