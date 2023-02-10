import React from 'react';

const Languages = ({ languages }) => {
    return (
        <div className='languages'>
            {
                languages && languages.map((language) => {
                    return (
                        <a key={ language } href='#'>
                            { language }
                        </a>
                    )
                })
            }
        </div>
    );
};

export default Languages;