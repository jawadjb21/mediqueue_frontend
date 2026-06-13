import React from 'react';
import navItems from "@/data/navItems.json"
import NavItems from './NavItems';
import { ThemeToggleButton } from '../theme/ThemeToggleButton';
import Image from 'next/image';
import Logo from "@/assets/Logo.png";
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from '../ui/button';
import LoginButton from './LoginButton';;
import { headers } from "next/headers";
import { auth } from '@/lib/auth.js';

const Navbar = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    console.log("Headers", JSON.stringify(await headers()));

    console.log(session);

    return (
        <div className="navbar shadow-sm md:px-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-5xl">
                        <GiHamburgerMenu className='text-3xl'></GiHamburgerMenu>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-secondary rounded-box z-1 mt-3 w-52 p-2 shadow text-secondary-foreground">
                        {
                            navItems.slice(0, 7).map(item => <NavItems key={item.id} navItem={item}></NavItems>)
                        }
                    </ul>
                </div>
                <div className='lg:flex justify-center items-center hidden'>
                    <Image src={Logo} alt='Logo of the MediQueue' height={80} width={80} className='rounded-xl'></Image>
                    <Link href={"/"}><h3 className='font-bold text-3xl text-primary lg:inline'>MediQueue</h3></Link>
                </div>
            </div>
            <Link href={"/"}><h3 className='font-bold text-4xl text-primary lg:hidden'>MediQueue</h3></Link>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-4">
                    {
                        navItems.slice(0, 5).map(item => <NavItems key={item.id} navItem={item}></NavItems>)
                    }
                </ul>
            </div>
            <div className="navbar-end gap-x-2">
                <Button className={"hidden md:inline"}>
                    {
                        navItems.map(item => item.name.toLowerCase() === "login" && <LoginButton key={item.id} navItem={item}></LoginButton>)
                    }
                </Button>
                <ThemeToggleButton></ThemeToggleButton>
            </div>
        </div>
    );
};

export default Navbar;