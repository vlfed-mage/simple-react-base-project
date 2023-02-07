const updateDataList = (name, state, action) => {
    const { payload } = action;

    switch (action.type) {
        case `FETCH_${ name.toUpperCase() }_SUCCESS`:
            return {
                people: payload,
                loading: false,
                error: null
            };
        case `FETCH_${ name.toUpperCase() }_REQUEST`:
            return {
                people: null,
                loading: true,
                error: null
            };
        case `FETCH_${ name.toUpperCase() }_FAILURE`:
            return {
                people: null,
                loading: false,
                error: payload
            };
        default:
            return state.peopleList
    }
}

export default updateDataList;
