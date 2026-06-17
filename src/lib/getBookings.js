export const getBookings = async (userId) => {
    try {
        const request = await fetch(`${process.env.SERVER_URL}/bookings/${userId}`);
        if(!request.ok){
            throw new Error("Server request failed!");
        }
        const response = await request.json();

        return response;
    } catch(error){
        console.error(error);
        return "Couldn't get bookings."
    }
}