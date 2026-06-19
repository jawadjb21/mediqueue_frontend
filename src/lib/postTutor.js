"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "./auth";

export const postTutor = async (formData) => {
  const token = await auth.api.getToken({
    headers: await headers(),
  })

  console.log("TOKEN:", token);

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
        "authorization": `Bearer ${token.token}`,
      },
      body: JSON.stringify(data),
    });
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    console.log("STATUS:", request.status);

    const response = await request.json();

    console.log("RESPONSE:", response);

    if (!response.acknowledged) {
      throw new Error("Database insertion failed!");
    } else {
      return {
        ok: true,
        message: `Succesfully added ${name} to Tutor list`,
      };
    }
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    revalidatePath("/tutors");
  }
};
