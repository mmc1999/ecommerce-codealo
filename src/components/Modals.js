import React from 'react';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';

export default function Modals() {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    
    return(
        <div>  
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1} />
        </div>
    )
}