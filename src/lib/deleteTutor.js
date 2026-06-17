"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTutor = async (tutor) => {
  try {
    const request = await fetch(
      `${process.env.SERVER_URL}/tutors/${tutor._id}`,
      {
        method: "DELETE",
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
