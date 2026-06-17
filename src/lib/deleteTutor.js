"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTutor = async (tutorId) => {
  try {
    const request = await fetch(`${process.env.SERVER_URL}/tutors/${tutorId}`, {
      method: "DELETE",
    });
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
  } catch (error) {
    console.error(error);
    return "Couldn't delete Tutor!";
  } finally {
    revalidatePath("/my-tutors");
    revalidatePath("/tutors");
    redirect("/my-tutors");
  }
};
