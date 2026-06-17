import Link from "next/link";
import { GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NoBookings = () => {
  return (
    <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <GraduationCap className="h-12 w-12 text-primary" />
        </div>

        <h2 className="text-3xl font-bold">No Bookings Yet</h2>

        <p className="mt-3 text-muted-foreground">
          You haven't booked any tutoring sessions yet. Browse our tutors and
          find the perfect mentor to help you achieve your learning goals.
        </p>

        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/tutors">
              <Search className="mr-2 h-4 w-4" />
              Find a Tutor
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoBookings;
