import * as actionTypes from '../action-types';

const {
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_REQUEST,
    FETCH_PEOPLE_FAILURE
} = actionTypes,

peopleLoaded = (newPeople) => {
    return {
        type: FETCH_PEOPLE_SUCCESS,
        payload: newPeople
    }
},

peopleRequested = () => {
    return {
        type: FETCH_PEOPLE_REQUEST
    }
},

peopleError = (error) => {
    return {
        type: FETCH_PEOPLE_FAILURE,
        payload: error
    }
}

export {
    peopleRequested,
    peopleLoaded,
    peopleError
};
