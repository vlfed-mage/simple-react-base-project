import * as actionTypes from '../action-types';

const {
    FETCH_PEOPLE,
} = actionTypes,

fetchPeople = (newPeople) => {
    return {
        type: FETCH_PEOPLE,
        payload: newPeople
    }
};

export {
    fetchPeople,
}