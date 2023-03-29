import React from 'react';
import {Link, useParams} from 'react-router-dom'
import Product from '../components/Product'

const Products = (props) => {

    const {id} = useParams()

    return (
        <>
            <h2>Strona produktu</h2>
            <Product/>
            {id}
            <Link to="/products">Powrót do listy produktów</Link>
        </>
    )
}

export default Products