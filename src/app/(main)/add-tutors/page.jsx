import { postTutor } from "@/lib/postTutor";
import AddTutor from "@/components/addTutor/AddTutor";

const page = () => {
  return <AddTutor postTutor={postTutor}></AddTutor>;
};

export default page;
