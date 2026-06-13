import React from 'react';
import NavItems from './NavItems';

const NotLoggedInNavbar = ({ user = null, navItems }) => {
    return (
        <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-secondary rounded-box z-1 mt-3 w-52 p-2 shadow text-secondary-foreground">
            {
                navItems.map(item => <NavItems key={item.id} navItem={item}></NavItems>)

            }
        </ul>
    );
};

export default NotLoggedInNavbar;