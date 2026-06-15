"use server";
export const getTutors = async () => {
    try {
        const request = await fetch(`${process.env.SERVER_URL}/tutors`);
        if(!request.ok){
            throw new Error("Server request failed!");
        }
        const response = await request.json();
        console.log(response);
        return response;
    } catch(error){
        console.error(error);
        return "No tutor found!";
    }
}