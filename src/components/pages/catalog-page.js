import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Catalog from '../catalog';

const People = () => {
    const location = useLocation();
    const category = location.pathname.match(/([a-z]*)$/)[1];

    return (
        <div className={ `catalog-page catalog-page--${ category }` }>
            <Routes>
                <Route path='/' element={ <Catalog category={ category } /> } />
            </Routes>
        </div>
    );
};

export default People;