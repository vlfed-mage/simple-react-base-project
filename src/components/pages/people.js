import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../catalog';

const People = () => {
    return (
        <div className='catalog-page catalog-page--people'>
            <Routes>
                <Route path='/' element={ <Catalog category='people' /> } />
            </Routes>
        </div>
    );
};

export default People;