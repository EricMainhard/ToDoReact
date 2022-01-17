import React from 'react'
import TodoItem from './TodoItem';

function TodoList({searchedTodos,completeTodos,deleteTodos}) {
    return (
        <>
            {searchedTodos.map((todo,i) => {
                return(
                    <TodoItem key={i} completeTodos={completeTodos} deleteTodos={deleteTodos}
                    dataset={i} task={todo.task} completed={todo.completed}/>
                )
            })} 
        </>
    )
}

export default TodoList
