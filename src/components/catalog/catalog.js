import React from 'react';
import ProductsCard from '../products/products-card';
import ProductsListContainer from '../../containers/products-list-container';
import store from '../../dev/store';

const CatalogListCollection = (props) => {
    const { items, category } = props;

    return items.map((item) => {
        const { id } = item;
        return (
            <li
                key={ id }
                className='catalog-item' >
                <ProductsCard
                    item={ item }
                    category={ category } />
            </li>
        )
    })
}

const Catalog = (props) => {
    return (
        <ul className='catalog'>
            <ProductsListContainer { ...props } >
                <CatalogListCollection />
            </ProductsListContainer>
        </ul>
    )
}

export default Catalog;
