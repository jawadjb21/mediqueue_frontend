import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';

const TutorAccordion = ({ myTutors }) => {
    return (
        <div className="container mx-auto max-w-5xl py-10 min-h-screen">
            <div className="mb-8 place-items-center md:place-items-start">
                <h1 className="text-4xl font-bold">
                    My Tutors
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Manage and review all tutors you've added.
                </p>
            </div>

            <Accordion
                type="single"
                collapsible
                className="space-y-4"
            >
                {myTutors.map((tutor) => (
                    <AccordionItem
                        key={tutor._id}
                        value={tutor._id}
                        className="overflow-hidden rounded-2xl border bg-card px-6 shadow-sm"
                    >
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex w-full items-center gap-5 text-left">
                                <div className="relative h-24 w-24 overflow-hidden rounded-xl border">
                                    <Image
                                        src={tutor.image}
                                        alt={tutor.name}
                                        className="h-full w-full object-cover"
                                        width={80}
                                        height={80}
                                    />
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-xl font-bold">
                                        {tutor.name}
                                    </h2>

                                    <div className="mt-1 flex flex-wrap gap-2">
                                        <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                            {tutor.subject}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">
                                        Fee
                                    </p>

                                    <p className="text-lg font-bold text-primary">
                                        ${tutor.fee}
                                    </p>
                                </div>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent>
                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold">
                                            Institute
                                        </h3>

                                        <p className="text-muted-foreground">
                                            {tutor.institute}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Location
                                        </h3>

                                        <p className="text-muted-foreground">
                                            {tutor.location}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Teaching Mode
                                        </h3>

                                        <p className="text-muted-foreground">
                                            {tutor.mode}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold">
                                            Available Slots
                                        </h3>

                                        <p className="text-muted-foreground">
                                            {tutor.slot}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Start Date
                                        </h3>

                                        <p className="text-muted-foreground">
                                            {new Date(
                                                tutor.start
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Available Days
                                        </h3>

                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {tutor.days?.map((day) => (
                                                <span
                                                    key={day}
                                                    className="
                                                rounded-full
                                                border
                                                px-3
                                                py-1
                                                text-xs
                                                font-medium
                                            "
                                                >
                                                    {day}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default TutorAccordion;