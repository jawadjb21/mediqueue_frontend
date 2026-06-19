"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Star, Users } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Blobs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div
              className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-border
          bg-card
          px-4
          py-2
          text-sm
          text-muted-foreground
        "
            >
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              Trusted by 10,000+ Students
            </div>

            <h1
              className="
            mt-6
            text-5xl
            font-black
            tracking-tight
            text-foreground
            md:text-6xl
            lg:text-7xl
          "
            >
              Find The Perfect
              <span className="block text-primary">Tutor Instantly</span>
            </h1>

            <p
              className="
            mt-6
            max-w-xl
            text-lg
            text-muted-foreground
          "
            >
              Connect with expert tutors, schedule learning sessions, and
              accelerate your educational journey through a seamless booking
              experience.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/tutors">
                  Find Tutors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="#">Learn More</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground">Expert Tutors</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">10K+</h3>
                <p className="text-muted-foreground">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">25K+</h3>
                <p className="text-muted-foreground">Sessions Booked</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="
            rounded-3xl
            border
            border-border
            bg-card
            p-6
            shadow-xl
          "
            >
              <div
                className="
            flex
            items-center
            gap-4
            rounded-2xl
            bg-secondary/40
            p-4
          "
              >
                <div
                  className="
              h-14
              w-14
              rounded-full
              bg-primary/20
            "
                />

                <div>
                  <h4 className="font-semibold">Sarah Ahmed</h4>

                  <p className="text-sm text-muted-foreground">
                    Mathematics Tutor
                  </p>
                </div>

                <div className="ml-auto text-right">
                  <p className="font-bold text-primary">$20/hr</p>

                  <div className="flex items-center gap-1 text-xs">
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    4.9
                  </div>
                </div>
              </div>

              <div
                className="
              mt-4
              rounded-2xl
              border
              border-border
              p-5
            "
              >
                <h3 className="font-semibold">Upcoming Session</h3>

                <p className="mt-2 text-muted-foreground">Advanced Algebra</p>
                <Button className="mt-4 w-full">
                  <Link href={"/bookings"} className="cursor-pointer">
                    Join Session
                  </Link>
                </Button>
              </div>
            </div>

            <div
              className="
            absolute
            -left-10
            top-12
            hidden
            rounded-2xl
            border
            border-border
            bg-card
            p-4
            shadow-lg
            lg:block
          "
            >
              <Users className="h-8 w-8 text-primary" />
              <p className="mt-2 font-bold">10K+</p>
              <p className="text-xs text-muted-foreground">Active Students</p>
            </div>

            <div
              className="
            absolute
            -right-8
            bottom-12
            hidden
            rounded-2xl
            border
            border-border
            bg-card
            p-4
            shadow-lg
            lg:block
          "
            >
              <BookOpen className="h-8 w-8 text-primary" />
              <p className="mt-2 font-bold">50+</p>
              <p className="text-xs text-muted-foreground">Subjects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
