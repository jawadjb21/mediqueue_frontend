"use server";

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { headers } from "next/headers";

export const deleteTutor = async (tutor) => {
  const token = await auth.api.getToken({
    headers: await headers(),
  });
  try {
    const request = await fetch(
      `${process.env.SERVER_URL}/tutors/${tutor._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `BEARER ${token.token}`,
        },
      },
    );
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
    if (response) {
      return {
        ok: true,
        message: `Deleted ${tutor.name} from Tutor list.`,
      };
    }
  } catch (error) {
    console.error(error);
    return "Couldn't delete Tutor!";
  } finally {
    revalidatePath("/my-tutors");
    revalidatePath("/tutors");
  }
};
