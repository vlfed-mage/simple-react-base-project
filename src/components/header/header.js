import React from 'react';

const Header = () => {
    return (
        <header className='header' id='header'>
            <div className='header__top'>
                <div className='container'>
                    <ul className='menu'>
                        <li><a href='#'>Stores</a></li>
                        <li><a href='#'>For clients</a></li>
                        <li><a href='#'>Services</a></li>
                    </ul>

                    <div className='languages'>
                        <a className='active' href='#'>
                            ENG
                        </a>
                        <a href='#'>
                            UA
                        </a>
                    </div>

                    <div className='user hide-screen-max-1080'>
                        <b>Hello, User</b>
                    </div>
                </div>
            </div>
            <div className='header__bottom container'>
                <div className='logo'>
                    LOGO
                </div>

                <div className='search'>
                    <form action='' method=''>
                        <input type='text' name='' placeholder='Search here...' />
                        <button type='submit' name=''>S</button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;
