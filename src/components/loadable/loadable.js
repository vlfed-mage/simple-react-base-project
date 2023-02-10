import React, { Suspense } from 'react';

import LoadingIndicator from '../loading-indicator';

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={ <LoadingIndicator /> }>
            <Component { ...props } />
        </Suspense>
    );
};

export default Loadable;