import React from 'react';
import Navbar from '@/components/header/Navbar';
import Footer from "@/components/footer/Footer";
import { headers } from "next/headers";
import { auth } from '@/lib/auth.js';
import { Toaster } from "@/components/ui/sonner"

const MainLayout = async ({ children }) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    const user = session?.user;

    return (
        <>
            <Navbar user={user}></Navbar>
            <main>
                {children}
            </main>
            <Toaster/>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;