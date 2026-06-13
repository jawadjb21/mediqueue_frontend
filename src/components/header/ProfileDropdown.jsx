"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggleButton } from '../theme/ThemeToggleButton';
import {
    User,
    LayoutDashboard,
    CalendarDays,
    Settings,
    LogOut,
} from "lucide-react";
import getInitials from '@/lib/getInitials';


const ProfileDropdown = ({ user }) => {
    const router = useRouter();

    console.log(user);

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => router.push("/login"),
            },
        });
    };

    const initials = getInitials(user.name);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-xl pl-1 pr-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                    <div className="relative">
                        <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                            <AvatarImage
                                src={user.image || ""}
                                alt={user.name ?? "User avatar"}
                            />
                            <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                                {initials}
                            </AvatarFallback>
                        </Avatar>
                        {/* Online indicator */}
                        <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full ring-2 ring-base-100" />
                    </div>
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-medium leading-none">{user.name ?? "Account"}</p>
                        {user.email && (
                            <p className="text-xs mt-0.5 truncate max-w-30">
                                {user.email}
                            </p>
                        )}
                    </div>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 mt-1" align="end" sideOffset={8}>

                {/* Identity header */}
                <DropdownMenuLabel className="font-normal px-3 py-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user.image || ""} alt={user.name ?? "User"} />
                            <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                                {initials}
                            </AvatarFallback>
                        </Avatar>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium truncate">{user.name ?? "Account"}</p>
                            {user.email && (
                                <p className="text-xs truncate">{user.email}</p>
                            )}
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {/* Navigation items */}
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href="#" className="flex items-center gap-2 cursor-pointer">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>Profile</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="#" className="flex items-center gap-2 cursor-pointer">
                            <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                            <span>Dashboard</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="#" className="flex items-center gap-2 cursor-pointer">
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                            <span>Appointments</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="#" className="flex items-center gap-2 cursor-pointer">
                            <Settings className="h-4 w-4 text-muted-foreground" />
                            <span>Settings</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* Theme toggle */}
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild onSelect={e => e.preventDefault()}>
                        <div className="flex items-center justify-between px-1 cursor-default">
                            <span className="text-sm">Theme</span>
                            <ThemeToggleButton />
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {/* Sign out */}
                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="text-red-500 focus:text-red-500 focus:bg-red-500/10 cursor-pointer gap-2"
                >
                    <LogOut className="h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdown;