import React, { useEffect, useState } from 'react';

export default function useCategoria(data) {
    const [datos, setDatos] = useState([])
    const [categoria, setCategoria] = useState("");

    const handleClick = (e) => {
        setCategoria(e.target.id)
        const getData = async () => {
                try {
                    let datos = await fetch(`https://codealo-commerce-cms.onrender.com/categories/${e.target.id}`);
                    setDatos(await datos.json());
                } catch (error) {
                    console.log(error)
                } 
            }
            getData();
    };
   
    return {    
        categoria,
        datos,
        handleClick
    }
}