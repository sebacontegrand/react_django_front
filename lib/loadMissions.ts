export const loadMissions = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/missions/`,
      {
        method: "GET",

        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const missions = await res.json();
    console.log("%c Line:4 🎂 missions", "color:#93c0a4", missions);

    return missions;
  } catch (error) {
    console.error("Failed to load missions:", error);
    return [];
  }
};
