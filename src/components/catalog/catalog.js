import React from 'react';
import { connect } from 'react-redux';

import ProductsCard from '../products/products-card';
import ProductsListContainer from '../../containers/products-list-container';

const Catalog = (props) => {
    const { category } = props,
    { [category]: items } = props[`${category}List`];

    return (
        <ul className='catalog'>
            <ProductsListContainer { ...props } >
                {
                    items && items.map((item) => {
                        const { id } = item;
                        return (
                            <li
                                key={ id }
                                className='catalog-item' >
                                <ProductsCard
                                    item={ item }
                                    category={ category } />
                            </li>
                        );
                    })
                }
            </ProductsListContainer>
        </ul>
    )
};

const mapStateToProps = ({ peopleList, planetsList, starshipsList }) => {
    return { peopleList, planetsList, starshipsList };
};

export default connect(mapStateToProps)(Catalog);
