export const getMyTutors = async (userId) => {
  if (!userId) {
    return "Please enter your user id";
  }
  try {
    const request = await fetch(`${process.env.SERVER_URL}/myTutors/${userId}`, {
      next: {
        revalidate: 60
      }
    });
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return "Could't load tutors!";
  }
};
