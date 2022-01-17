import React,{useState,useEffect} from 'react';
import TodoCount from './Components/TodoCount';
import TodoInput from './Components/TodoInput'
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import CreateToDoButton from './Components/CreateToDoButton';

import './App.css';

function App() {

  return (
  <>
      <TodoCount/>
      <TodoInput/>
      <TodoSearch/>
      <TodoList/>
      <CreateToDoButton/>
  </>
  );
}

export default App;
