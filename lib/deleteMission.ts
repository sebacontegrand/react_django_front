export const deleteMission = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/missions/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete mission with ID ${id}, status ${response.status}`);
      }
  
    
      return true;
    } catch (error) {
      console.error('Failed to delete mission:', error);
      throw error; 
    }
  };
  