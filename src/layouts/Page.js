import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductsListPage from '../pages/ProductsListPage';
import ContactPage from '../pages/ContactPage' 
import AdminPage from '../pages/AdminPage' 
import ErrorPage from '../pages/ErrorPage' 


const Page = () => {
    return ( 
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/products" element={<ProductsListPage/>}></Route>
            <Route path="/product/:id" element={<ProductsPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
            <Route path="/admin" element={<AdminPage/>}></Route>
            <Route path="/*" element={<ErrorPage/>}></Route>
        </Routes>
     );
}
 
export default Page;