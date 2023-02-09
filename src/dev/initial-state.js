const initialState = {
    peopleList: {
        people: null,
        loading: true,
        error: null,
    },
    planetsList: {
        planets: null,
        loading: true,
        error: null,
    },
    starshipsList: {
        starships: null,
        loading: true,
        error: null,
    },
    admin: {
        menu: [
            {
                path: '/people',
                name: 'People'
            },
            {
                path: '/planets',
                name: 'Planets'
            },
            {
                path: '/starships',
                name: 'Starships'
            },
            {
                path: '/about',
                name: 'About'
            }
        ],
        languages: [
            'UA',
            'ENG'
        ]
    }
};

export default initialState;
