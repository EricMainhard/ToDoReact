import React from 'react';
import ReactDOM from 'react-dom';
import {HiX} from "react-icons/hi";

function Modal(props){
    return(
        ReactDOM.createPortal(
            <div className='modalBackground'>
                <div className='modalContent'>
                    <div className="modalHeader">
                        <h3>Write your new task</h3>
                    </div>
                    <div className="modalBody">
                        {props.children}
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        )
    )
}

export default Modal;