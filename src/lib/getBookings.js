"use server";

import { headers } from "next/headers";
import { auth } from "./auth";

export const getBookings = async (userId) => {
  const token = await auth.api.getToken({
    headers: await headers(),
  });

  try {
    const request = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${userId}`,
      {
        headers: {
          authorization: `BEARER ${token.token}`,
        },
      },
    );
    if (!request.ok) {
      const body = await request.text();

      throw new Error(
        `Booking request failed.
        Status: ${request.status}
        Body: ${body}`
      );
    }
    const response = await request.json();

    return response;
  } catch (error) {
    console.error(error);
    return "Couldn't get bookings.";
  }
};
