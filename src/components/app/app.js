import React from 'react';
import { css } from '@emotion/css';

import Slider from '../slider';
import Catalog from '../catalog';
import Header from '../header';

const appStyles = css`
    margin: 50px auto;
    width: 100%;
    max-width: 1440px;
    display: grid;
    grid-gap: 24px;
`;

const App = () => {
    return (
        <div className={ appStyles }>
            <Header />
            <Slider category='people' />
            <Slider category='planets' />
            <Slider category='starships' />
            <Catalog category='people' />
            <Catalog category='planets' />
            <Catalog category='starships' />
        </div>
    );
};

export default App;
