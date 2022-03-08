import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import productoContext from '../context/contextCarrito';
import CarritosComprasModule from "./CarritosCompras.module.css"
import CarritoVacio from './CarritoVacio';
import ProductoEnCarrito from './ProductoEnCarrito';

export default function CarritoCompras() {
    let {
        datazos,
        handleClickBorrar,
    } = useContext(productoContext);

    return (
        <section className={CarritosComprasModule.seccionPrincipalCarrito}>
            {   
                datazos.length === 0
                ? <CarritoVacio />
                : <>
                    <div>
                        {Object.values(datazos).map(el => 
                            <ProductoEnCarrito key={el[1].id} el={el} handleClickBorrar={handleClickBorrar} />
                        )}
                    </div>
                    <div className={CarritosComprasModule.divButton} >
                        <NavLink to="/carrito" className={CarritosComprasModule.button} >Checkout</NavLink>
                    </div>
                </>  
                
            }
        </section>
        
    )
}