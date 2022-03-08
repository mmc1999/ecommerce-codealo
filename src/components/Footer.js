import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.svg";
import FooterModule from "./Footer.module.css"

export default function Footer() {
    return(
        <footer className={FooterModule.footer}>
            <div>
                <img src={logo} alt='logo' className={FooterModule.logo} />
            </div>
            <div>
                <NavLink to="/" className={FooterModule.linkInternoFooter}>HOME</NavLink>
            </div>
            <div>
                <p className={FooterModule.copyright}>Copyright 2021. All Rights Reserved</p>
            </div>
        </footer>
    )
}