import initialState from '../initial-state';
import * as actionTypes from '../action-types';

const {
    FETCH_PEOPLE,
} = actionTypes;

const reducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case FETCH_PEOPLE:
            return {
                ...state,
                people: payload
            }
        default:
            return state
    }
}

export default reducer;
