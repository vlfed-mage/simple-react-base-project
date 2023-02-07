import initialState from '../initial-state';
import updatePeopleList from './update-people-list';

const reducer = (state = initialState, action) => {
    return {
        peopleList: updatePeopleList(state, action),
        planetsList: state.planetsList,
        starshipsList: state.starshipsList
    }
}

export default reducer;
