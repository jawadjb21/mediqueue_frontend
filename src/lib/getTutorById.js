"use server";

import { headers } from "next/headers";
import { auth } from "./auth";

export const getTutorById = async (tutorId) => {
  const token = await auth.api.getToken({
    headers: await headers(),
  });

  try {
    const request = await fetch(`${process.env.SERVER_URL}/tutors/${tutorId}`, {
      headers: {
        authorization: `BEARER ${token.token}`,
      },
    });
    if (!request.ok) {
      throw new Error("Tutor ID server request failed!");
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return "Couldn't find tutor";
  }
};
