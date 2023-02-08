import React from 'react';
import { css } from '@emotion/css';

import ProductsList from '../products/products-list';
import Slider from '../slider';
import Catalog from '../catalog';

const appStyles = css`
    margin: 50px auto;
    width: 100%;
    max-width: 1440px;
    display: grid;
    grid-gap: 24px;
    
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
            {/*<Slider of='people' />*/}
            <Catalog of='people' />
            {/*<ProductsList of='planets' />*/}
            {/*<ProductsList of='starships' />*/}
        </div>
    );
};

export default App;
