import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import storeServices from '../../../dev/services';
import * as actions from '../../../dev/actions';

import LoadingIndicator from '../../loading-indicator';
import ErrorIndicator from '../../error-indicator';
import ProductCard from '../products-card'

const ProductsList = (props) => {
    const { getCollection } = storeServices();
    const { of: category, dataLoaded, dataRequested, dataError } = props;
    const { [category]: products, loading, error } = props[`${category}List`];

    useEffect(() => {
        dataRequested(category);
        getCollection(category)
            .then((response) => dataLoaded(category, response))
            .catch((e) => dataError(category, e))
    }, []);

    if (loading) {
        return <LoadingIndicator />
    }

    if (error) {
        return <ErrorIndicator />
    }

    const productsList = products.map((product) => {
        const { id } = product;
        return (
            <li
                key={ id }
                className='products-list-item' >
                <ProductCard
                    product={ product }
                    category={ category }/>
            </li>
        )
    });

    return (
        <ul className='products-list'>
            { productsList }
        </ul>
    );
};

const mapStateToProps = ({ peopleList, planetsList, starshipsList }) => {
    return { peopleList, planetsList, starshipsList };
};

export default connect(mapStateToProps, actions)(ProductsList);
