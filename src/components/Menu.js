import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {

    return (
        <div className="Menu">
            <ul>
                <li><NavLink to='/'>O nas</NavLink></li>
                <li><NavLink to='/products'>Nasze produkty</NavLink></li>
                <li><NavLink to='/offer'>Oferta/Cennik</NavLink></li>
                <li><NavLink to='/realisations'>Realizacje/Galeria</NavLink></li>
                <li><NavLink to='/contact'>Kontakt</NavLink></li>
            </ul>
        </div>
    )
}