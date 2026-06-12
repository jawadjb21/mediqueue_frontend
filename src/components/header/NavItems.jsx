"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ navItem }) => {
    const pathname = usePathname();
    const isActive = pathname === navItem.path;

    return (
        <Link
            href={navItem.path}
            className={`
                relative px-3 py-2 text-2xl font-bold
                transition-all duration-300 ease-in-out
                hover:text-secondary-foreground
                hover:scale-105
                after:absolute after:left-0 after:bottom-0
                after:h-1 after:w-0
                after:bg-secondary-foreground
                after:transition-all after:duration-300
                hover:after:w-full
                ${isActive && "text-secondary-foreground after:w-full"}
            `}
        >
            {navItem.name}
        </Link>
    );
};

export default NavItems;