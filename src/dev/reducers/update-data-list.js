const updateDataList = (name, state, action) => {
    const { payload } = action;

    switch (action.type) {
        case `FETCH_${ name.toUpperCase() }_SUCCESS`:
            return {
                [name]: payload,
                loading: false,
                error: null
            };
        case `FETCH_${ name.toUpperCase() }_REQUEST`:
            return {
                [name]: null,
                loading: true,
                error: null
            };
        case `FETCH_${ name.toUpperCase() }_FAILURE`:
            return {
                [name]: null,
                loading: false,
                error: payload
            };
        default:
            return state[`${name}List`]
    }
}

export default updateDataList;
