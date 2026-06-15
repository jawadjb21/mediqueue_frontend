import { getTutors } from "@/lib/getTutors";
import TutorCard from "@/components/tutors/TutorCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const AllTutorsPage = async () => {
    const allTutors = await getTutors();

    return (
        <div className="min-h-screen bg-background">
            <section className="relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-accent/10" />

                <div className="container relative z-10 mx-auto px-4 py-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                            Find Your Perfect Tutor
                        </h1>

                        <p className="mt-6 text-lg text-muted-foreground">
                            Browse experienced tutors across multiple subjects
                            and start learning from the best educators.
                        </p>

                        <div className="mx-auto mt-10 max-w-xl">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    placeholder="Search by tutor name, subject, location..."
                                    className="h-12 pl-12 text-base"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground">
                            Available Tutors
                        </h2>

                        <p className="text-muted-foreground">
                            {allTutors.length} tutors available
                        </p>
                    </div>
                </div>

                {allTutors.length === 0 ? (
                    <div className="flex min-h-75 items-center justify-center rounded-2xl border border-dashed border-border bg-card">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">
                                No Tutors Found
                            </h3>

                            <p className="mt-2 text-muted-foreground">
                                Check back later for new tutors.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div
                        className="
                            grid
                            gap-6
                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-4
                        "
                    >
                        {allTutors.map((tutor) => (
                            <TutorCard
                                key={tutor._id}
                                tutor={tutor}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default AllTutorsPage;