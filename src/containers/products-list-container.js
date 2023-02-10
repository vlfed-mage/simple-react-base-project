import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import storeServices from '../dev/services';
import * as actions from '../dev/actions';

import LoadingIndicator from '../components/loading-indicator';
import ErrorIndicator from '../components/error-indicator';

const ProductsListContainer = (props) => {
    const { getCollection } = storeServices();
    const { category, dataLoaded, dataRequested, dataError } = props;
    const { [category]: items, loading, error } = props[`${category}List`];

    useEffect(() => {
        dataRequested(category);
        getCollection(category)
            .then((response) => dataLoaded(category, response))
            .catch((error) => dataError(category, error))
    }, [category]);

    return (
        <>
            { loading && <LoadingIndicator /> }
            { error && <ErrorIndicator /> }

            { !loading && !error && (
                props.children
            ) }
        </>
    );
};

const mapStateToProps = ({ peopleList, planetsList, starshipsList }) => {
    return { peopleList, planetsList, starshipsList };
};

export default connect(mapStateToProps, actions)(ProductsListContainer);
