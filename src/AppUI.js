import React, {useContext} from 'react';
import TodoCount from './Components/TodoCount';
// import TodoInput from './Components/TodoInput';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import {TodoContext} from './TodoContext';
import CreateToDoButton from './Components/CreateToDoButton';
import Modal from './Components/Modal';
import {MyLoader} from './Components/MyLoader.jsx'
import {TodoForm} from './Components/TodoForm';

function AppUI(){

    const {error, loading, searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal} = useContext(TodoContext);

    return (
        <>  
            <TodoCount/>
            {/* <TodoInput/> */}
            <TodoSearch/>
            <TodoList>
            {error && <p>Something went wrong...</p>}
            {loading && <MyLoader/>}
            {(!loading && !searchedTodos) && <p>Add a task</p>}
            {searchedTodos.map((todo,i) => {
                return(
                    <TodoItem key={i} completeTodos={completeTodos} deleteTodos={deleteTodos}
                    dataset={i} task={todo.task} completed={todo.completed}/>
                )
            })}
            </TodoList>
           {openModal && 
            <Modal setOpenModal={setOpenModal} openModal={openModal}>                
                <TodoForm/>
            </Modal>
            }
            <CreateToDoButton setOpenModal={setOpenModal}/>
        </>
        );
}

export default AppUI;