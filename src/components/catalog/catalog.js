import React from 'react';
import ProductsList from '../products/products-list';

const Catalog = (props) => {
    return (
        <ul className='products-list'>
            <ProductsList { ...props }/>
        </ul>
    )
}

export default Catalog;
