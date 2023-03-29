import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom'



const Footer = () => {
    const {pathname} = useLocation()
    return ( 
        <div>
            <h2>Stopka</h2>
            {/* <Routes> */}
            {/* <Route path='/' element={<}/> */}
            {/* </Routes> */}
            <p>Jesteś w {pathname}</p>
        </div>
     );
}
 
export default Footer;