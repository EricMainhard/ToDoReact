import React, { useState, useContext } from 'react';
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
        <form className='modalForm' onSubmit={onSubmit}>
            <textarea className='form_text' onChange={onChange}></textarea>
            <div className="form_buttons">
                <button className='form_button' type='button' onClick={onCancel}>CANCEL</button>
                <button className='form_button' type='submit'>ADD</button>
            </div>
        </form>
    )

}

export {TodoForm};
