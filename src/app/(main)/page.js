import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import { headers } from "next/headers";
import { auth } from '@/lib/auth.js';
import Banner from "@/components/header/Banner";


export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const user = session?.user;
  
  return (
    <>
      <Navbar user={user}></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </>);
}
