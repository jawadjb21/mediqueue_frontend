"use server";
import { revalidatePath } from "next/cache";
import { updateSlot } from "./updateSlot";
import { auth } from "./auth";
import { headers } from "next/headers";

export const deleteBooking = async (booking) => {
  const token = await auth.api.getToken({
    headers: await headers(),
  });
  try {
    const request = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`,
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
    const update = await updateSlot(booking.tutorId, "1", token);
    if (update.ok) {
      return {
        ok: true,
        message: `Deleted session with ${booking.tutorName}`,
      };
    }
  } catch (error) {
    console.error(error);
    return "Could't delete booking!";
  } finally {
    revalidatePath("/bookings");
  }
};
