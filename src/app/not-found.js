"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, Search } from "lucide-react";

export default function NotFound() {
    return (<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">

        ```
        {/* Decorative Background */}
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative z-10 max-w-3xl text-center">

            {/* Floating Icon */}
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-14 w-14 text-primary" />
            </div>

            {/* Large 404 */}
            <h1 className="mt-8 text-8xl font-black tracking-tight text-primary md:text-9xl">
                404
            </h1>

            {/* Heading */}
            <h2 className="mt-4 text-4xl font-bold text-foreground">
                No Tutor Found Here
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                The page you're looking for might have graduated,
                changed classrooms, or never existed in the first place.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                <Button asChild size="lg">
                    <Link href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Back Home
                    </Link>
                </Button>

                <Button
                    asChild
                    variant="outline"
                    size="lg"
                >
                    <Link href="/tutors">
                        <Search className="mr-2 h-4 w-4" />
                        Browse Tutors
                    </Link>
                </Button>

            </div>

        </div>
    </main>
    );
}
