import React from 'react';
import PropTypes from 'prop-types';

const MainSideNav = ({ active }) => {
    return (
        <nav id='main-side-nav' className='side-nav'>
            <a  href='/'>Home</a>
            <a href='/post_recipe'>Post recipe</a>
        </nav>
    );
};

MainSideNav.propTypes = {
    active: PropTypes.string.isRequired,
}

export default MainSideNav;