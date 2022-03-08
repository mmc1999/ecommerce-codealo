import React from 'react';
import useFetchApi from '../hooks/useFetchApi';
import Producto from './Producto';
import MainModule from "./Main.module.css";
import basesDatos from "../images/bases.jpg";
import frontend from "../images/frontend.png";
import backend from "../images/backend.jpg";
import otras from "../images/otras.jfif";
import ssg from "../images/ssg.jfif";
import codigo from "../images/codigo.jfif";
import useCategoria from '../hooks/useCategoria';

export default function Main() {
    let {
        data,
    } = useFetchApi();
    
    let {
        datos,
        handleClick,
        categoria
    } = useCategoria(data)
    
    return(
        <main>
            <section className={MainModule.seccionCategorias}>
                <h2 className={MainModule.h1}>Categorias</h2>
                <div className={MainModule.divTecnologias}>
                    <div className={MainModule.divDivTech}>
                        <img src={frontend} alt="Imagenes de tecnologias frontend" onClick={handleClick} id="front" className={MainModule.imagenesTecnologias} />
                        <p>frontend</p>
                    </div>
                    <div className={MainModule.divDivTech} >
                        <img src={backend} alt="Imagenes de tecnologias backend" onClick={handleClick} id="back" className={MainModule.imagenesTecnologias} />
                        <p>backend</p>
                    </div>
                    <div className={MainModule.divDivTech}>
                        <img src={basesDatos} alt="Imagenes de bases de datos" onClick={handleClick} id="database" className={MainModule.imagenesTecnologias} />
                        <p>Bases de datos</p>
                    </div>
                    <div className={MainModule.divDivTech}>
                        <img src={ssg} alt="Imagenes de otras tecnologias" onClick={handleClick} id="ssg" className={MainModule.imagenesTecnologias} />
                        <p>SSG</p>
                    </div>
                    <div className={MainModule.divDivTech}>
                        <img src={codigo} alt="Imagenes de otras tecnologias" onClick={handleClick} id="container" className={MainModule.imagenesTecnologias} />
                        <p>Open source</p>
                    </div>
                    <div className={MainModule.divDivTech}>
                        <img src={otras} alt="Imagenes de otras tecnologias" onClick={handleClick} id="other" className={MainModule.imagenesTecnologias} />
                        <p>Other</p>
                    </div>
                </div>
            </section>
            <section className={MainModule.seccionProducto}>
                <h2 className={MainModule.h1}>Productos</h2>
                <div className={MainModule.divProducto}>
                    {    
                        !Boolean(datos.products)
                        ?   data.map(el => 
                                <Producto key={el.id} el={el} />
                            )
                        : datos.products.map(el => 
                            <Producto key={el.id} el={el} categoria={categoria}/>
                        )
                    } 
                </div>
                
            </section>
        </main>
    )
}