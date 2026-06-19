import Link from "next/link";
import TutorCard from "@/components/tutors/TutorCard.jsx";

const AvailableTutors = ({ featuredTutors }) => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">Available Tutors</h2>

        <p className="mt-3 text-muted-foreground">
          Learn from experienced educators across multiple subjects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredTutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/tutors"
          className="
                        inline-flex
                        items-center
                        rounded-xl
                        bg-primary
                        px-6
                        py-3
                        text-primary-foreground
                        font-medium
                        transition
                        hover:opacity-90
                    "
        >
          View All Tutors
        </Link>
      </div>
    </section>
  );
};

export default AvailableTutors;
