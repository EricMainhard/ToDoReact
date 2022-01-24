import React, {useContext} from 'react';
import {HiPlus,HiMinus} from "react-icons/hi";
import { TodoContext } from '../TodoContext';

function CreateToDoButton() {

    const {setOpenModal,openModal,loading} = useContext(TodoContext);

    const toggleModal = (e) => {
        if (loading === true){
            e.preventDefault()
        } else {
            setOpenModal(prevState => !prevState)
        }
    }
    return (
        <button className={`createToDoButton ${openModal === false ? "--normal" : "--reverse"}`}
                onClick={toggleModal}>
            <HiPlus/>
        </button>
    )
}

export default CreateToDoButton
