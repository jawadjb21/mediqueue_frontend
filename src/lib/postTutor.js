"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postTutor = async (formData) => {
  const {
    name,
    image,
    subject,
    days,
    fee,
    slot,
    start,
    location,
    institute,
    mode,
    userId,
  } = formData;
  const data = {
    name: name.trim(),
    image: image.trim(),
    subject,
    days,
    fee: Number(fee.trim()),
    slot: Number(slot.trim()),
    start,
    location: location.trim(),
    institute: institute.trim(),
    mode,
    userId,
  };

  try {
    const request = await fetch(`${process.env.SERVER_URL}/add-tutors`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
    if (!response.acknowledged) {
      throw new Error("Database insertion failed!");
    }
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    revalidatePath("/tutors");
    redirect("/");
  }
};
