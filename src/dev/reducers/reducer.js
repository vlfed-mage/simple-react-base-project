import initialState from '../initial-state';
import updateDataList from './update-data-list';

const reducer = (state = initialState, action) => {
    return {
        peopleList: updateDataList('people', state, action),
        planetsList: updateDataList('planets', state, action),
        starshipsList: updateDataList('starships', state, action),
        admin: state.admin
    }
}

export default reducer;
