import React from 'react';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img src={ require('../../images/error.jpg') } alt='Error indicator'/>
            <b>Something get terrible wrong</b>
            <span>Reload page or try it again later</span>
        </div>
    );
};

export default ErrorIndicator;
