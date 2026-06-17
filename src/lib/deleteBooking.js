"use server";
import { revalidatePath } from "next/cache";
import { updateSlot } from "./updateSlot";

export const deleteBooking = async (booking) => {
  try {
    const request = await fetch(
      `${process.env.SERVER_URL}/bookings/${booking._id}`,
      {
        method: "DELETE",
      },
    );
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
    const update = await updateSlot(booking.tutorId, "1");
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
