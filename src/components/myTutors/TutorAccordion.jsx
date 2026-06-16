import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  MapPin,
  Monitor,
  Clock,
  Calendar,
  BookOpen,
  DollarSign,
} from "lucide-react";
import Image from "next/image";
import UpdateTutorDialog from "./UpdateTutorDialog";

const TutorAccordion = ({ myTutors }) => {
  return (
    <div className="container mx-auto max-w-5xl py-10 min-h-screen">
      <div className="mb-8 place-items-center md:place-items-start">
        <h1 className="text-4xl font-bold">My Tutors</h1>

        <p className="mt-2 text-muted-foreground">
          Manage and review all tutors you've added.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {myTutors.map((tutor) => (
          <AccordionItem
            key={tutor._id}
            value={tutor._id}
            className="overflow-hidden rounded-2xl border bg-card px-6 shadow-sm"
          >
            <AccordionTrigger className="hover:no-underline py-5">
              <div className="flex w-full items-center gap-5 text-left">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border shadow-sm">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    className="h-full w-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>

                <div className="flex-1">
                  <h2 className="mt-3 text-3xl font-bold text-primary tracking-tight">
                    {tutor.name}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-primary/10
                        px-3
                        py-1.5
                        text-sm
                        font-medium
                        text-primary
                    "
                    >
                      <BookOpen className="h-4 w-4" />
                      {tutor.subject}
                    </div>
                  </div>
                </div>

                <div
                  className="
                rounded-2xl
                border
                bg-primary/5
                px-5
                py-3
                text-center
                shadow-xs
            "
                >
                  <div className="flex items-center justify-center gap-1 text-primary">
                    <DollarSign className="h-4 w-4" />

                    <span className="text-xs font-medium uppercase tracking-wide">
                      Fee
                    </span>
                  </div>

                  <p className="mt-1 text-2xl font-bold text-primary">
                    ${tutor.fee}
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="mt- 6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border bg-muted/30 p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-xs font-medium uppercase tracking-wide">
                      Institute
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-bold text-primary">
                    {tutor.institute}
                  </p>
                </div>

                <div className="rounded-xl border bg-muted/30 p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs font-medium uppercase tracking-wide">
                      Location
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-bold text-primary">
                    {tutor.location}
                  </p>
                </div>

                <div className="rounded-xl border bg-muted/30 p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Monitor className="h-4 w-4" />
                    <span className="text-xs font-medium uppercase tracking-wide">
                      Teaching Mode
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-bold text-primary">
                    {tutor.mode}
                  </p>
                </div>

                <div className="rounded-xl border bg-muted/30 p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs font-medium uppercase tracking-wide">
                      Available Slots
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-bold text-primary">
                    {tutor.slot}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border bg-muted/20 p-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">
                    Start Date
                  </span>
                </div>

                <p className="mt-3 text-xl font-bold text-primary">
                  {new Date(tutor.start).toLocaleDateString()}
                </p>
              </div>

              <div className="mt-4 rounded-xl border bg-muted/20 p-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Available Days
                </p>

                <div className="flex flex-wrap gap-2">
                  {tutor.days?.map((day) => (
                    <span
                      key={day}
                      className="
                        rounded-full
                        bg-primary/10
                        px-3
                        py-1.5
                        text-sm
                        font-medium
                        text-primary
                    "
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <UpdateTutorDialog tutor={tutor} />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TutorAccordion;
