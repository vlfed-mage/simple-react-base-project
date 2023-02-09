import React from 'react';
import {connect} from 'react-redux';

import Menu from '../menu'
import Languages from '../languages'
import {NavLink} from 'react-router-dom';

const Header = ( {admin: { menu, languages }} ) => {
    return (
        <header className='header' id='header'>
            <div className='header__top container'>
                <Menu menu={ menu } />
                <Languages languages={ languages } />

                <div className='user hide-screen-max-1080'>
                    <b>Hello, User</b>
                </div>
            </div>
            <div className='header__bottom container'>
                <NavLink to='/' className='logo'>
                    <img src={ require('../../images/logo.png') } alt='Star wars logo'/>
                </NavLink>

                <div className='search'>
                    <form action='' method=''>
                        <input type='text' name='' placeholder='Search here...' />
                        <button className='button' type='submit' name=''>Search</button>
                    </form>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = ({ admin }) => {
    return { admin };
}

export default connect(mapStateToProps)(Header);
