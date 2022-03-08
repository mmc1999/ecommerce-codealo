import React from 'react';
import ProductoEnCarritoModule from "./ProductoEnCarrito.module.css"
import close from "../images/icon-close.svg";

export default function ProductoEnCarrito({el, handleClickBorrar}) {
    return (
        <div className={ProductoEnCarritoModule.primerDiv}>
            <img src={`https://codealo-commerce-cms.onrender.com${el[1].image.url}`} alt="Imagen de tu producto" className={ProductoEnCarritoModule.imagen}/>
            <div className={ProductoEnCarritoModule.divDatos}>
                <p className={`${ProductoEnCarritoModule.datos} ${ProductoEnCarritoModule.titulo}`}>{el[1].title}</p>
                <p className={ProductoEnCarritoModule.datos}>{`${el[0]} x ${el[1].price} = `}<b>${(el[0]*el[1].price).toFixed(2)}</b></p>
            </div>
            <img src={close} alt="Imagen de un tacho de basura" onClick={() => handleClickBorrar(el[1].id)} className={ProductoEnCarritoModule.iconoDeCerrar} />
        </div>
    )
}