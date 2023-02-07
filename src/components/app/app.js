import React from 'react';
import { css } from '@emotion/css';

import CatalogList from '../catalog-list';

const appStyles = css`
    margin: 50px auto;
    width: 100%;
    max-width: 1440px;
    display: flex;

    .container {
        background: #1d1e26;
        border: 4px solid #9580ff;
        border-radius: 6px;
        padding: 25px;
    }
`;

const App = () => {
    return (
        <div className={ appStyles }>
            <CatalogList name='people' />
            <CatalogList name='planets' />
            <CatalogList name='starships' />
        </div>
    );
};

export default App;
