import React from 'react';
import ResumenCompraModule from "./ResumenCompra.module.css";

export default function ResumenCompra({el}) {
    return (
        <>
            <div className={ResumenCompraModule.primerDiv}>
                <img src={`https://codealo-commerce-cms.onrender.com${el[1].image.url}`} alt="Imagen de tu producto" className={ResumenCompraModule.imagen}/>
                <div className={ResumenCompraModule.divDatos}>
                    <div className={ResumenCompraModule.divTituloCant}>
                        <p className={` ${ResumenCompraModule.titulo}`}>{el[1].title}</p>
                        <p className={ResumenCompraModule.cantidad}>X{el[0]}</p>
                    </div>
                    <p className={ResumenCompraModule.datos}><b>${(el[0]*el[1].price).toFixed(2)}</b></p>
                </div>
            </div>
        </>
        
    )
}