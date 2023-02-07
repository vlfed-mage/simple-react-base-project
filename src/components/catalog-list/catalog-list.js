import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import storeServices from '../../dev/services';

import * as actions from '../../dev/actions';
import LoadingIndicator from '../loading-indicator';
import ErrorIndicator from '../error-indicator';

const CatalogList = (state) => {
    const { getCollection } = storeServices();
    const { name, dataLoaded, dataRequested, dataError } = state;
    const { [name]: data, loading, error } = state[`${name}List`];

    useEffect(() => {
        dataRequested(name);
        getCollection(name)
            .then((data) => dataLoaded(name, data))
            .catch((error) => dataError(name, error))
    }, []);

    if (loading) {
        return <LoadingIndicator />
    }

    if (error) {
        return <ErrorIndicator />
    }

    const dataList = data.map(({ id, name }) => {
        return (
            <li
                key={ id }
                className='catalog-list' >
                <span>{ name }</span>
            </li>
        )
    });

    return (
        <ul>
            { dataList }
        </ul>
    );
};

const mapStateToProps = ({ peopleList, planetsList, starshipsList }) => {
    return { peopleList, planetsList, starshipsList };
};

export default connect(mapStateToProps, actions)(CatalogList);
