import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import storeServices from '../../dev/services';

import * as actions from '../../dev/actions';
import LoadingIndicator from '../loading-indicator';
import ErrorIndicator from '../error-indicator';

const CatalogList = ({ people, loading, error, ...rest }) => {
    const { getCollection } = storeServices();
    const { peopleLoaded, peopleRequested, peopleError } = rest;

    useEffect(() => {
        peopleRequested();
        getCollection('people')
            .then((data) => peopleLoaded(data))
            .catch((error) => peopleError(error))
    }, []);

    if (loading) {
        return <LoadingIndicator />
    }

    if (error) {
        return <ErrorIndicator />
    }

    const peopleList = people.map(({ id, name }) => {
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
            { peopleList }
        </ul>
    );
};

const mapStateToProps = ({ peopleList: { people, loading, error } }) => {
    return { people, loading, error };
};

export default connect(mapStateToProps, actions)(CatalogList);
