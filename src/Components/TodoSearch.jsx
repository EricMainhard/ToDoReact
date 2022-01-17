import React, {useState} from 'react'

function TodoSearch({search,setSearch}) {

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
