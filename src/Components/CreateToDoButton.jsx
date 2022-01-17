import React from 'react'

function CreateToDoButton() {
    return (
        <button className='createToDoButton'
                onClick={()=>{
            console.log('click')
        }}>
            ADD NEW TASK
        </button>
    )
}

export default CreateToDoButton
