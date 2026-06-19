"use server";
export const updateSlot = async (tutorId, slot = 0, token) => {
  if (!tutorId) {
    return "No tutor found!";
  }

  try {
    const request = await fetch(`${process.env.SERVER_URL}/tutors/${tutorId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "authorization": `Bearer ${token.token}`
      },
      body: JSON.stringify({ slot: Number(slot) }),
    });
    if (!request.ok) {
      throw new Error("Server request failed!");
    }
    const response = await request.json();
    if (response) {
      return { ok: "true", message: "Slot updated successfully!" };
    }
  } catch (error) {
    console.error(error);
    return "Failed to update slot";
  }
};
