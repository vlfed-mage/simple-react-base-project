import React, {lazy} from 'react';

import Loadable from '../loadable';
import Section from '../section';

const Slider = Loadable(lazy( () => import('../slider') ))

const HomePage = () => {
    return (
        <>
            <Section headingText='People'>
                <Slider category='people' />
            </Section>
            <Section headingText='Planets'>
                <Slider category='planets' />
            </Section>
            <Section headingText='Starships'>
                <Slider category='starships' />
            </Section>
        </>
    );
};

export default HomePage;