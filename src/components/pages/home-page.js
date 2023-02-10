import React, {lazy} from 'react';

import Loadable from '../loadable';

const Slider = Loadable(lazy( () => import('../slider') ))

const HomePage = () => {
    return (
        <>
            <Slider category='people' />
            <Slider category='planets' />
            <Slider category='starships' />
        </>
    );
};

export default HomePage;