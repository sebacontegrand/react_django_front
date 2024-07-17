export const loadRecipes = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/launches/`,
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
      const launches = await res.json();
      
      console.log("%c Line:17 🍕 launches", "color:#fca650", launches);
      
  
      return launches;
    } catch (error) {
      console.error("Failed to load launches:", error);
      return [];
    }
  };
  