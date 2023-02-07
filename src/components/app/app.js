import React from 'react';
import { css } from '@emotion/css';

import ErrorIndicator from '../error-indicator';
import LoadingIndicator from '../loading-indicator';

const appStyles = css`
    margin: 50px auto;
    width: 100%;
    max-width: 1440px;

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
            <ErrorIndicator />
            <LoadingIndicator />
        </div>
    );
};

export default App;
