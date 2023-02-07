import * as actionTypes from '../action-types';

const {
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_REQUEST,
    FETCH_PEOPLE_FAILURE
} = actionTypes;


const updatePeopleList = (state, action) => {
    const { payload } = action;

    switch (action.type) {
        case FETCH_PEOPLE_SUCCESS:
            return {
                people: payload,
                loading: false,
                error: null
            };
        case FETCH_PEOPLE_REQUEST:
            return {
                people: null,
                loading: true,
                error: null
            };
        case FETCH_PEOPLE_FAILURE:
            return {
                people: null,
                loading: false,
                error: payload
            };
        default:
            return state.peopleList
    }
}

export default updatePeopleList;
