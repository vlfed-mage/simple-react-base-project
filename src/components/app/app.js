import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { css } from '@emotion/css';

import Slider from '../slider';
import Catalog from '../catalog';
import Header from '../header';
import People from '../pages/people';

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
            <Routes>
                <Route path='/people' element={ <People /> } />
            </Routes>
        </div>
    );
};

export default App;
