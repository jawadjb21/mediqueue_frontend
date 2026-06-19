"use server";
export const getTutors = async () => {
  try {
    const request = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
      next: {
        revalidate: 60,
      },
    });
    if (!request.ok) {
      throw new Error("All tutors server request failed!");
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return "No tutor found!";
  }
};
