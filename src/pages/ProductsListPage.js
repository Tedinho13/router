import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/ProductListPage.css'

const products = ["car", "bike", "cycle"]

const ProductsListPage = () => {
    const list = products.map(product => (
        <li>
            <Link key={product} to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return ( 
        <div className="products">
        <h2>Lista produktów</h2>
        <div>
            <ul>
                {list}
            </ul>
        </div>
        </div>
     );
}
 
export default ProductsListPage;