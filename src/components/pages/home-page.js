import React, {lazy} from 'react';

import Loadable from '../loadable';

const Slider = Loadable(lazy( () => import('../slider') ))

const HomePage = () => {
    return (
        <>
            <section className='section'>
                <Slider category='people' />
            </section>
            <section className='section'>
                <Slider category='planets' />
            </section>
            <section className='section'>
                <Slider category='starships' />
            </section>
        </>
    );
};

export default HomePage;