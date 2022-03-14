import React, { createContext, useEffect, useState } from 'react';

const productoContext = createContext();



const ProductoProvider = ({children}) => {
    const [producto, setProducto] = useState(0);
    const [diccionario, setDiccionario] = useState([]);
    const [datazos, setDatazos] = useState([]);

    let storage = !Boolean(localStorage.getItem("datos")) 
        ? []
        : JSON.parse(localStorage.getItem("datos"));

    useEffect(() => {
        setDatazos(storage);
        setDiccionario(storage)
    }, []);

    const handleClickSumar = (el) => {
        if(!diccionario[el.id]) {
            setProducto(0)
            setDiccionario({
                ...diccionario,
                [el.id]:[1, el]
            })
        } else {
            setProducto(producto+1)
            setDiccionario({
                ...diccionario,
                [el.id]:[producto+1, el]
            })
        }
    }
        
    const handleClickRestar = (el) =>  {
        if(producto===0) return
        setProducto(producto-1)
        if(!diccionario[el.id]) {
            setProducto(0)
            setDiccionario({
                ...diccionario,
                [el.id]:[0, el]
            })
        } else {
            setProducto(producto-1)
            setDiccionario({
                ...diccionario,
                [el.id]:[producto-1, el]
            })
        }
    };

    const handleSubmit = () => {
        if(producto===0) return
        localStorage.setItem("datos", JSON.stringify(diccionario))
        setDatazos(diccionario);
        setProducto(0)
        console.log(diccionario)
    }
    
    const handleClickBorrar = (param) => {
        let datosBorrados = Object.values(storage).filter(el => el[1].id != param);
        delete diccionario[param];
        localStorage.setItem("datos", JSON.stringify(datosBorrados));
        setDatazos(datosBorrados);
    }

    
    const data = {
        diccionario, 
        handleClickSumar, 
        handleClickRestar, 
        handleSubmit, 
        datazos, 
        handleClickBorrar, 
        setDiccionario,
        setDatazos
    };
    return (
        <productoContext.Provider value={data}>
            {children}
        </productoContext.Provider>
    )
}

export {ProductoProvider}
export default productoContext