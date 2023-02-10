import React, {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import { css } from '@emotion/css';

import Loadable from '../loadable';
import ScrollToTop from '../scroll-to-top'

const Header = Loadable(lazy( () => import('../header') ));
const HomePage = Loadable(lazy( () => import('../pages/home-page') ));
const CatalogPage = Loadable(lazy( () => import('../pages/catalog-page') ));

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
            <ScrollToTop />
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
