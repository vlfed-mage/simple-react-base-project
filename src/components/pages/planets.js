import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Catalog from '../catalog';

const Planets = () => {
    return (
        <Routes>
            <Route path='/' element={ <Catalog category='planets' /> } />
        </Routes>
    );
};

export default Planets;