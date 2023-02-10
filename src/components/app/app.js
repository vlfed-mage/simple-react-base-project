import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { css } from '@emotion/css';

import Slider from '../slider';
import Header from '../header';
import People from '../pages/people';
import Planets from '../pages/planets';
import Starships from '../pages/starships';
import HomePage from '../pages/home-page';

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
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/people' element={ <People /> } />
                <Route path='/planets' element={ <Planets /> } />
                <Route path='/starships' element={ <Starships /> } />
            </Routes>
        </div>
    );
};

export default App;
