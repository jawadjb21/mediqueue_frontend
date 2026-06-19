import { getTutorById } from "@/lib/getTutorById";

export async function generateMetadata({ params }) {
    const { tutorId } = await params;

    const tutor = await getTutorById(tutorId);

    return {
        title: tutor.name,
    }
}

const TutorDetailsLayout = ({ children }) => {
    return children;
};

export default TutorDetailsLayout;
