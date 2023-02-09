import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ menu }) => {
    return (
        <ul className='menu'>
            {
                menu && menu.map(({ path, name }) => {
                    return (
                        <li key={ name }>
                            <NavLink to={ path } >
                                { name }
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Menu;