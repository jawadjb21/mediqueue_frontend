import { auth } from "@/lib/auth";
import { getBookings } from "@/lib/getBookings";
import { headers } from "next/headers";
import Bookings from "./Bookings";
import NoBookings from "./NoBookings";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const myBookings = await getBookings(user?.id);

  return (
    <>
      {myBookings.length > 0 ? (
        <Bookings myBookings={myBookings}></Bookings>
      ) : (
        <NoBookings></NoBookings>
      )}
    </>
  );
};

export default MyBookings;
