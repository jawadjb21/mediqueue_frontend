import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

const LoginButton = ({ navItem }) => {
    return (
        <Button><Link
            href={navItem.path}
            className='relative px-3 py-2 text-2xl font-bold
                transition-all duration-300 ease-in-out
                hover:scale-105
                after:absolute after:left-0 after:bottom-0
                after:h-1 after:w-0
                after:transition-all after:duration-300
                hover:after:w-full'
        >
            {navItem.name}
        </Link>
        </Button>
    )
};

export default LoginButton;