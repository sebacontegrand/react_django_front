"use client";
import { deleteRecipe } from "@/lib/deleteRecipe";
interface DeleteButtonProps {
  id: string;
  onDelete: (deletedId: string) => void;
}
const DeleteButton = ({ id, onDelete }: DeleteButtonProps) => {
  const handleDelete = async () => {
    try {
      await deleteRecipe(id);
      onDelete(id);
      console.log(`Recipe with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Failed to delete recipe with ID ${id}:`, error);
    }
  };

  return (
    <button
      className="w-20 relative top-1 right-1 bg-slate-500 rounded-md text-white   hover:bg-red-600 transition-all duration-300 ease-in-out"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
