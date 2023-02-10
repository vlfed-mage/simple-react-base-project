import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Catalog from '../catalog';

const Starships = () => {
    return (
        <Routes>
            <Route path='/' element={ <Catalog category='starships' /> } />
        </Routes>
    );
};

export default Starships;