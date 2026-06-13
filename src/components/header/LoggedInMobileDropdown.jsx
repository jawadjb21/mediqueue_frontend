import React from 'react';
import NavItems from './NavItems';

const notLoggedInButtons = ["login", "register"];

const LoggedInNavbar = ({ user = null, navItems }) => {
    return (
        <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-secondary rounded-box z-1 mt-3 w-52 p-2 shadow text-secondary-foreground">
            {
                navItems.map(item => !notLoggedInButtons.includes(item.name.toLowerCase()) && <NavItems key={item.id} navItem={item}></NavItems>)
            }
        </ul>
    );
};

export default LoggedInNavbar;