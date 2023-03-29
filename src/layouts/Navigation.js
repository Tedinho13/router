import React from 'react';
import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom'
import '../styles/Navigation.css'

const list = [
    {name: "start", path:"/"},
    {name: "Produkty", path:"/products"},
    {name: "Kontakt", path:"/contact"},
    {name: "Panel admina", path:"/admin"}
]

const Navigation = () => {
    const links = list.map(listItem => <li key={listItem.id}> <NavLink to={listItem.path}>{listItem.name}</NavLink></li>)
    return ( 
        <nav>
            <ul>
                {/* <li>
                    <NavLink to="/"></NavLink>
                </li>
                <li>
                    <NavLink to="/products">Produkty</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Kontakt</NavLink>
                </li>
                <li>
                    <NavLink to="/admin">Panel admina</NavLink>
                </li> */}
                {links}
            </ul>
        </nav>
     );
}
 
export default Navigation;