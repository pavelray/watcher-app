import React from 'react';
import './Modal.scss';

export default function Modal({ children, modalId }) {

    const onClose = () => {
        const modal = document.getElementById(`${modalId}`);
        modal.style.display = "none";
    }

    return (
        <div className='modal' id={modalId}>
            <div className='modal-content'>
                <span className="close" onClick={onClose}>&times;</span>
                <div className='modal-content__body'>
                    {children}
                </div>
            </div>
        </div>
    )
}
