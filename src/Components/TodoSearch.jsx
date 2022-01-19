import React, {useState,useContext} from 'react'
import { TodoContext } from '../TodoContext'

function TodoSearch() {

    const {search,setSearch} = useContext(TodoContext);

    return (
        <input type="text" placeholder='Search a task'
        className='search-input'
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
        value={search}> 
        </input>
    )
}

export default TodoSearch
