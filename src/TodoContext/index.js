import { createContext,useState } from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props){

const {item:todos, saveItem: saveTodos, loading, error} = useLocalStorage('todos_items', []);

const [search,setSearch] = useState('');
const totalTodos = todos.length;
const completedTodos = todos.filter(todo => todo.completed !== false).length;
let searchedTodos = [];
if (!search >= 1){
    searchedTodos = todos;
} else {
    searchedTodos = todos.filter(todo => {
    const todoText = todo.task.toLowerCase();
    const searchText = search.toLowerCase();
    return todoText.includes(searchText);
    })
    
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
    saveTodos(newTodos);
    } else {
    selectTodo = {
        task: searchedTodos[id].task,
        completed: false
    }
    let newTodos = [...todos];
    newTodos[id] = selectTodo;
    saveTodos(newTodos);
    }
}

const deleteTodos = (id) => {
    let deletedTodo = searchedTodos[id];
    let newTodos = searchedTodos.filter(todo => todo !== deletedTodo);
    saveTodos(newTodos);
}

    return(
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            search,
            setSearch,
            searchedTodos,
            completeTodos,
            deleteTodos,
            error,
            loading
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider};