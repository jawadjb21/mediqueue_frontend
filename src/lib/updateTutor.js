"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateTutor = async (formData) => {
  if (!formData) {
    return "No tutor found!";
  }
  try {
    const request = await fetch(
      `${process.env.SERVER_URL}/tutors/${formData?.tutorId}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
    console.log(response);
    if(response.acknowledged){
        return {
            "ok": true,
            "message": `Updated ${formData.name}'s details.`
        }
    }
  } catch (error) {
    console.error(error);
    return "Couldn't update tutor.";
  } finally {
    revalidatePath("/tutors");
    revalidatePath("/my-tutors");
  }
};
