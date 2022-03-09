import React, { useRef, useState } from 'react';

export default function useMenuMobile() {
    let refMenu = useRef(null);
    const [menu2, setMenu] = useState(false);
    const [carritoCompra, setCarritoCompra] = useState(false)

    window.addEventListener("scroll", e => window.scrollY != 0 ? setCarritoCompra(false) : "")

    const handleClickAbrir = () =>{ 
        setMenu(true)
        setCarritoCompra(false)
    }
    const handleClickCerrar = () => setMenu(false);

    const handleCarrito = () => !carritoCompra ? setCarritoCompra(true) : setCarritoCompra(false)

    return {
        refMenu,
        handleClickAbrir,
        handleClickCerrar,
        handleCarrito,
        carritoCompra,
        menu2
    }
}