"use server";

import { refresh, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postTutor = async (formData) => {
    try {
        const request = await fetch(`${process.env.SERVER_URL}/add-tutors`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData),
        });
        if(!request.ok){
            throw new Error("Server request failed!")
        }
        const response = await request.json();
        if(!response.acknowledged){
            throw new Error("Database insertion failed!")
        }
    } catch (error){
        console.error(error);
        return null;
    } finally{
        revalidatePath("/tutors");
        redirect("/");
    }
}