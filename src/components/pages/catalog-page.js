import React, {lazy} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loadable from '../loadable';

const Catalog = Loadable(lazy( () => import('../catalog') ))

const People = () => {
    const location = useLocation();
    const name = location.pathname.match(/([a-z]*)$/)[1];

    return (
        <div className={`catalog-page catalog-page--${ name }`}>
            <Routes>
                <Route path='/' element={ <Catalog category={ name } /> } />
            </Routes>
        </div>
    );
};

export default People;