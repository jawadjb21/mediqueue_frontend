"use server";
export const postBooking = async (formData) => {
    try {
        const request = await fetch(`${process.env.SERVER_URL}/bookings/${userId}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        });
        if(!request.ok){
            throw new Error("Server request failed!");
        }
        const response = await request.json();
        return response;
    } catch(error){
        console.error(error);
        return "Failed to book a session!";
    }
}