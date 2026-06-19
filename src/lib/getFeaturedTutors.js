"use server";

export const getFeaturedTutors = async () => {
  try {
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured-tutors`, {
      next: {
        revalidate: 60,
      },
    });
    if (!request.ok) {
      throw new Error("Featured tutors server request failed!");
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return "Couldn't find tutor";
  }
};
