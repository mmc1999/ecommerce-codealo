import React from 'react';
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import carrito from "../images/icon-cart.svg";
import perfil from "../images/image-avatar.png";
import cerrar from "../images/icon-close.svg";
import { NavLink } from 'react-router-dom';
import HeaderModule from "./Header.module.css"
import useMenuMobile from '../hooks/useMenuMobile';
import CarritoCompras from "./CarritoCompras"

export default function Header() {
    let {
        handleClickAbrir,
        handleClickCerrar,
        handleCarrito,
        carritoCompra,
        menu2
    } = useMenuMobile();
    console.log(carritoCompra)
    return(
        <header className={HeaderModule.header}>
                <img src={menu} alt="icono hamburguesa" className={HeaderModule.iconoMenu} onClick={handleClickAbrir} />
                <div>
                    <img src={logo} alt='logo' className={HeaderModule.logo} />
                </div>
                <nav className={menu2 
                                    ? HeaderModule.abriNav 
                                    : carritoCompra 
                                    ? HeaderModule.nav
                                    : HeaderModule.nav}>
                    <div className={HeaderModule.navDiv}>
                        <img src={logo} alt='logo' className={HeaderModule.logoNav} />
                        <img src={cerrar} alt='icono de cerrar' className={HeaderModule.cerrar} onClick={handleClickCerrar} />
                        <NavLink to="/" className={HeaderModule.linkInterno}>Home</NavLink> 
                        {/*<NavLink to="/carrito" className={HeaderModule.linkInterno}>Carrito</NavLink>*/} 
                    </div>
                </nav>
                <div>
                    <img src={carrito} alt="icono del carrito" className={HeaderModule.iconoCarrito} onClick={handleCarrito} />
                    {!menu2 && carritoCompra &&  <CarritoCompras />}
                    <img src={perfil} alt='icono del perfil' className={HeaderModule.iconoPerfil} />
                </div>
        </header>
    )
}