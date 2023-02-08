import React, { useEffect, Children, cloneElement } from 'react';
import { connect } from 'react-redux';

import storeServices from '../dev/services';
import * as actions from '../dev/actions';

import LoadingIndicator from '../components/loading-indicator';
import ErrorIndicator from '../components/error-indicator';

const ProductsListContainer = (props) => {
    const { getCollection } = storeServices();
    const { of: category, dataLoaded, dataRequested, dataError } = props;
    const { [category]: items, loading, error } = props[`${category}List`];

    useEffect(() => {
        dataRequested(category);
        getCollection(category)
            .then((response) => dataLoaded(category, response))
            .catch((e) => dataError(category, e))
    }, []);

    console.log(loading, error, items)

    return (
        <>
            { loading && <LoadingIndicator /> }
            { error && <ErrorIndicator /> }

            { !loading && !error && (
                Children.map(
                    props.children,
                    (child) => cloneElement(
                        child,
                        { items: items, category: category }
                    )
                )
            ) }
        </>
    );
};

const mapStateToProps = ({ peopleList, planetsList, starshipsList }) => {
    return { peopleList, planetsList, starshipsList };
};

export default connect(mapStateToProps, actions)(ProductsListContainer);
