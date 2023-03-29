import React from 'react';
import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpg'

import '../styles/Header.css'
import {BrowserRouter as Router, NavLink, Routes, Route, withRouter} from 'react-router-dom'


const Header = () => {
    const images = [img1, img2, img3]
    const index = Math.floor(Math.random() * images.length)
    const losedImage = images[index]
    return ( 
        <>
            <Routes>
                <Route path='/*' element={<img src={losedImage}/>}></Route>
                <Route path='/products' element={<img src={losedImage}/>}></Route>
                <Route path='/contact' element={<img src={losedImage}/>}></Route>
            </Routes>

            
        </>
     );
}
 
export default Header;