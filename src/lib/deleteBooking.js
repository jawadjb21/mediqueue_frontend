"use server";
import { revalidatePath } from "next/cache";

export const deleteBooking = async (bookingId) => {
    try {
        const request = await fetch(`${process.env.SERVER_URL}/bookings/${bookingId}`, {
            method: "DELETE"
        });
        if(!request.ok){
            throw new Error("Server request failed!");
        }
        const response = await request.json();
    } catch (error) {
        console.error(error);
        return "Could't delete booking!"
    } finally {
        revalidatePath("/bookings");
    }
}