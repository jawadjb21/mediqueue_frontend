"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postBooking = async (formData) => {
    let redirectPath = null;
    if (!formData) {
        console.error(error);
        return "No valid data found";
    }
    try {
        const request = await fetch(`${process.env.SERVER_URL}/bookings`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        });
        if (!request.ok) {
            throw new Error("Server request failed!");
        }
        const response = await request.json();
        if (!response.acknowledged) {
            throw new Error("Couldn't add booking to database!");
        }
        redirectPath = `/tutors/${formData?.tutorId}`;
    } catch (error) {
        console.error(error);
        return "Failed to book a session!";
    } finally {
        revalidatePath("/bookings");
        if (redirectPath) {
            redirect(`/tutors/${formData?.tutorId}`);
        }
    }
}