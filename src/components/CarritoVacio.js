import React from 'react';
import CarritoVacioModule from "./CarritoVacio.module.css";

export default function CarritoVacio() {
    return (
        <section className={CarritoVacioModule.seccionCarritoVacio}>
            <div className={CarritoVacioModule.primerDivCarrito}>
                <p className={CarritoVacioModule.cart}>Carrito</p>
                <span className={CarritoVacioModule.spanLinea}></span>
            </div>
            <div>
               <p className={CarritoVacioModule.cartaVacia}>Tu carrito esta vacio.</p> 
            </div>
        </section>
    )
}