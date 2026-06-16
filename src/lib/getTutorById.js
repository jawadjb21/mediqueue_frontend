export const getTutorById = async (tutorId) => {
  try {
    const request = await fetch(`${process.env.SERVER_URL}/tutors/${tutorId}`);
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return "Couldn't find tutor";
  }
};
