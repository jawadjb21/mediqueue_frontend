"use server";

import { revalidatePath } from "next/cache";
import { updateSlot } from "./updateSlot";
import { auth } from "./auth";
import { headers } from "next/headers";

export const postBooking = async (formData) => {
  if (!formData) {
    return "No valid data found";
  }

  const token = await auth.api.getToken({
    headers: await headers(),
  });

  const { studentName, phone, tutorName, studentEmail, tutorId, userId } =
    formData;
  const data = {
    studentName: studentName.trim(),
    phone: phone,
    tutorName: tutorName.trim(),
    studentEmail: studentEmail.trim(),
    tutorId,
    userId,
  };
  try {
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify(data),
    });
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
    if (!response.acknowledged) {
      throw new Error("Couldn't add booking to database!");
    }
    const update = await updateSlot(formData?.tutorId, "-1", token);
    if (update.ok) {
      return {
        ok: true,
        message: `Booked a session with ${tutorName}`,
      };
    }
  } catch (error) {
    console.error(error);
    return "Failed to book a session!";
  } finally {
    revalidatePath("/bookings");
  }
};
