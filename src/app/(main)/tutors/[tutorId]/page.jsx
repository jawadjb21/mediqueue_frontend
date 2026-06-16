import Image from "next/image";
import { getTutorById } from "@/lib/getTutorById";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    MapPin,
    Calendar,
    Clock,
    GraduationCap,
    BookOpen,
    Monitor,
    DollarSign,
} from "lucide-react";
import { BookingDialog } from "@/components/tutors/BookingDialog";
import { postBooking } from "@/lib/postBooking";
import NoSlotAvailable from "@/components/tutors/NoSlotAvailable";

const TutorDetailsPage = async ({ params }) => {
    const { tutorId } = await params;

    const tutor = await getTutorById(tutorId);

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 pt-8">
                <div className="rounded-lg border bg-card px-4 py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/tutors">
                                        Tutors
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    {tutor.name}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            {/* Hero */}
            <section className="relative overflow-hidden border-b">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-accent/10" />

                <div className="container relative mx-auto px-4 py-16">
                    <div className="grid gap-10 lg:grid-cols-[350px_1fr]">
                        {/* Image */}
                        <div className="relative h-105 overflow-hidden rounded-3xl border shadow-xl">
                            <Image
                                src={tutor.image}
                                alt={tutor.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-4 flex flex-wrap gap-2">
                                <Badge variant="secondary">
                                    {tutor.subject}
                                </Badge>

                                <Badge>
                                    {tutor.mode}
                                </Badge>
                            </div>

                            <h1 className="text-5xl font-bold tracking-tight">
                                {tutor.name}
                            </h1>

                            <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                                <GraduationCap className="size-4" />
                                {tutor.institute}
                            </div>

                            <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                                <MapPin className="size-4" />
                                {tutor.location}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                {
                                    tutor.slot > 0 ?
                                        <BookingDialog tutor={tutor} postBooking={postBooking} />
                                        : <NoSlotAvailable />

                                }

                                <Button
                                    size="lg"
                                    variant="outline"
                                >
                                    Contact Tutor
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="container mx-auto px-4 py-10">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardContent className="flex items-center gap-4 p-6">
                            <DollarSign className="size-8 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Fee
                                </p>
                                <p className="text-2xl font-bold">
                                    ${tutor.fee}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex items-center gap-4 p-6">
                            <BookOpen className="size-8 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Subject
                                </p>
                                <p className="font-semibold">
                                    {tutor.subject}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex items-center gap-4 p-6">
                            <Monitor className="size-8 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Mode
                                </p>
                                <p className="font-semibold">
                                    {tutor.mode}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="flex items-center gap-4 p-6">
                            <Clock className="size-8 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Slots
                                </p>
                                <p className="font-semibold">
                                    {tutor.slot}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Availability */}
            <section className="container mx-auto px-4 pb-16">
                <Card>
                    <CardContent className="p-8">
                        <h2 className="mb-6 text-2xl font-bold">
                            Availability
                        </h2>

                        <div className="mb-6 flex items-center gap-2 text-muted-foreground">
                            <Calendar className="size-4" />
                            Starting from{" "}
                            {new Date(
                                tutor.start
                            ).toLocaleDateString()}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {tutor.days?.map((day) => (
                                <Badge
                                    key={day}
                                    variant="outline"
                                    className="px-4 py-2"
                                >
                                    {day}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default TutorDetailsPage;