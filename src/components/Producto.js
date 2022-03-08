import React, { useContext } from 'react';
import productoContext from '../context/contextCarrito';
import ProductoModule from "./Producto.module.css";

export default function Producto({el, categoria}) {
    let {
        diccionario, 
        handleClickSumar, 
        handleClickRestar,
        handleSubmit
    } = useContext(productoContext);
    
    return(
        <div className={ProductoModule.divProducto}>
            <img src={`https://codealo-commerce-cms.onrender.com${el.image.url}`} alt="imagen del producto" className={ProductoModule.imagen} />
            <p className={ProductoModule.title}>{el.title}</p>
            <p className={ProductoModule.parrafo}>{el.description}</p>
            <div>
                <p className={`${ProductoModule.price} ${ProductoModule.caracteristicas}`}>${el.price}</p>
                <p className={`${ProductoModule.categories} ${ProductoModule.caracteristicas}`}>{categoria ? categoria : el.categories[0].name}</p>
            </div>
            <div className={ProductoModule.divOperaciones}>
                <p onClick={() => handleClickRestar(el)} className={ProductoModule.operaciones} id={el.id}>-</p>
                <p> {   !Boolean(diccionario[el.id])
                            ? 0
                            : diccionario[el.id][0]
                }
                </p>
                <p onClick={() => handleClickSumar(el)} className={ProductoModule.operaciones} id={el.id}>+</p>
            </div>
            <div className={ProductoModule.divButton}>
                <button id={el.id} className={ProductoModule.button} onClick={() => handleSubmit(el)}></button>
            </div>
        </div>
    )
}