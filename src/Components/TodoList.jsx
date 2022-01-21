import React, {useState,useEffect} from 'react'

function TodoList(props) {
    
const [secondPage,setSecondPage] = useState(false)

useEffect(()=>{
    if(props.children[3].length > 3){
        console.log('slide') 
    }
},[props.children[3]])
    
    return (
        <section className='todoList'>  
            {props.children}
        </section>
    )
}

export default TodoList
