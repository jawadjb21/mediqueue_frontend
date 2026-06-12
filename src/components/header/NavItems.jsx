import React from 'react';
import Link from 'next/link';

const NavItems = ({ navItem }) => {
    return (
        <Link href={navItem.path}>{navItem.name}</Link>
    )
};

export default NavItems;