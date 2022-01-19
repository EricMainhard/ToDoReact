import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { TodoContext } from '../TodoContext';

const TodoForm = ()=>{

    const {setOpenModal,addTodo} = useContext(TodoContext);
    const [value,setValue] = useState('');

    const onChange = (e) => {
        if (e.target.value.trim() != ''){
            setValue(e.target.value);
        }
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (value != ''){
        addTodo(value);
        setOpenModal(false);
        }
    }

    return(
        <form onSubmit={onSubmit}>
            <h3>Write a new task</h3>
            <textarea onChange={onChange}></textarea>
            <button type='button' onClick={onCancel}>CANCEL</button>
            <button type='submit'>ADD</button>
        </form>
    )

}

export {TodoForm};