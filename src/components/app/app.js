import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { css } from '@emotion/css';

import Header from '../header';
import HomePage from '../pages/home-page';
import CatalogPage from '../pages/catalog-page';

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
                <Route path='/people' element={ <CatalogPage /> } />
                <Route path='/planets' element={ <CatalogPage /> } />
                <Route path='/starships' element={ <CatalogPage /> } />
            </Routes>
        </div>
    );
};

export default App;
