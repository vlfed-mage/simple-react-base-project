import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import storeServices from '../../../dev/services';
import * as actions from '../../../dev/actions';

import LoadingIndicator from '../../../components/loading-indicator';
import ErrorIndicator from '../../../components/error-indicator';
import ProductCard from '../../../components/products/products-card'

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

    return (
        <>
            { loading && <LoadingIndicator /> }
            { error && <ErrorIndicator /> }

            { !loading && !error && (
                products.map((product) => {
                    const { id } = product;
                    return (
                        <ProductCard
                            product={ product }
                            category={ category }/>
                    )
                })
            ) }
        </>
    );
};

const mapStateToProps = ({ peopleList, planetsList, starshipsList }) => {
    return { peopleList, planetsList, starshipsList };
};

export default connect(mapStateToProps, actions)(ProductsList);
