import React from 'react';
import "./modal.css"

export default function Modal({isOpen, closeModal}) {
    //esta funcion para detener la propagacion del evento click adentro del div para que no se cierre la etiqueta modal 
    const handleModalClick = (e) => e.stopPropagation()
    return(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalClick}>
                <h1 className='h1Modal'>Gracias por su compra</h1>
                <p className='confirmacion'>Recibirá una confirmación por correo electrónico en breve.</p>
                <button className='modal-close' onClick={closeModal}>X</button>
            </div>
        </article>
    )
}