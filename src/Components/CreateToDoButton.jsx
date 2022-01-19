import React from 'react'
import {HiPlus,HiMinus} from "react-icons/hi";
import { useContext } from 'react/cjs/react.development';
import { TodoContext } from '../TodoContext';

function CreateToDoButton() {

    const {setOpenModal,openModal} = useContext(TodoContext);

    const toggleModal = () => {
        setOpenModal(prevState => !prevState)
    }
    return (
        <button className={`createToDoButton ${openModal === false ? "--normal" : "--reverse"}`}
                onClick={toggleModal}>
            <HiPlus/>
        </button>
    )
}

export default CreateToDoButton
