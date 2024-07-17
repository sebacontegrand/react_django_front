"use client";
import { deleteMission } from "@/lib/deleteMission";
interface DeleteButtonProps {
  id: string;
  onDelete: (deletedId: string) => void;
}
const DeleteButton = ({ id, onDelete }: DeleteButtonProps) => {
  const handleDelete = async () => {
    try {
      await deleteMission(id);
      onDelete(id);
      console.log(`Mission with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Failed to delete mission with ID ${id}:`, error);
    }
  };

  return (
    <button
      className="w-20 relative top-1 right-1 bg-slate-400 text-white rounded-md  hover:bg-red-600 transition-all duration-300 ease-in-out"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
