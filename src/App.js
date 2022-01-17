import React,{useState,useEffect} from 'react';
import TodoCount from './Components/TodoCount';
// import TodoInput from './Components/TodoInput';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import CreateToDoButton from './Components/CreateToDoButton';

import './App.css';

const defaultTodos = [
  {task: "Comprar pan", completed: false},
  {task: "Retirar orden", completed: false},
  {task: "Ver clase de Platzi", completed: false}
];

function App() {

  const [search,setSearch] = useState('');
  const [todos,setTodos] = useState(defaultTodos);
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed != false).length;
  let searchedTodos = [];
  if (!search >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.task.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    })
    const searchToDo = search
  }

  const completeTodos = (id) => {
    let selectTodo = searchedTodos[id];
    console.log(selectTodo.completed)
    if (!selectTodo.completed){
      selectTodo = {
       task: searchedTodos[id].task,
       completed: true
      }
      let newTodos = [...todos];
      newTodos[id] = selectTodo;
      setTodos(newTodos);
    } else {
      selectTodo = {
        task: searchedTodos[id].task,
        completed: false
       }
       let newTodos = [...todos];
       newTodos[id] = selectTodo;
       setTodos(newTodos);
    }
  }

  const deleteTodos = (id) => {
    let deletedTodo = searchedTodos[id];
    let newTodos = searchedTodos.filter(todo => todo != deletedTodo);
    setTodos(newTodos);
  }

  return (
  <>
      <TodoCount completedTodos={completedTodos} totalTodos={totalTodos}/>
      {/* <TodoInput/> */}
      <TodoSearch search={search} setSearch={setSearch}/>
      <TodoList searchedTodos={searchedTodos} completeTodos={completeTodos} deleteTodos={deleteTodos}/>
      <CreateToDoButton/>
  </>
  );
}

export default App;
