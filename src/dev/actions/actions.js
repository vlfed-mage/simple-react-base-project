const dataLoaded = (name, newPeople) => {
    return {
        type: `FETCH_${ name.toUpperCase() }_SUCCESS`,
        payload: newPeople
    }
},

dataRequested = (name) => {
    return {
        type: `FETCH_${ name.toUpperCase() }_REQUEST`
    }
},

dataError = (name, error) => {
    return {
        type: `FETCH_${ name.toUpperCase() }_FAILURE`,
        payload: error
    }
}

export {
    dataRequested,
    dataLoaded,
    dataError
};
