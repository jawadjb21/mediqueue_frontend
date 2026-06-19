import Banner from "@/components/header/Banner";
import AvailableTutors from "@/components/main/AvailableTutors";
import { getFeaturedTutors } from "@/lib/getFeaturedTutors";

export default async function Home() {
  const featuredTutors = await getFeaturedTutors();
  return (
    <>
      <Banner></Banner>
      <AvailableTutors featuredTutors={featuredTutors}></AvailableTutors>
    </>
  );
}
