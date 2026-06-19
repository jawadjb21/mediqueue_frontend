"use server";

import { headers } from "next/headers";
import { auth } from "./auth";

export const getMyTutors = async (userId) => {
  const token = await auth.api.getToken({
    headers: await headers(),
  });

  if (!userId) {
    return "Please enter your user id";
  }
  try {
    const request = await fetch(
      `${process.env.SERVER_URL}/myTutors/${userId}`,
      {
        next: {
          revalidate: 60,
        },
        headers: {
          authorization: `BEARER ${token.token}`,
        },
      },
    );
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return "Could't load tutors!";
  }
};
