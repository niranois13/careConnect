import { useEffect } from "react";
import { userResponseSchema } from "../../../../../packages/schemas/src/users.schemas.ts";
import { z } from "zod";
import CareSeekerProfile from "./CareSeekerProfile.tsx";
import ProfessionalProfile from "./ProfessionalProfile.tsx";

interface AdminUserModalProps {
  user: z.infer<typeof userResponseSchema>;
  onClose: () => void;
}

export default function AdminUserModal({ user, onClose }: AdminUserModalProps,) {
  // const { careSeeker, isLoading: isLoadingCare, error: errorCare, refetch: refetchCare } = useGetCareSeekerById(userId);
  // const { professional, isLoading: isLoadingPro, error: errorPro, refetch: refetchPro } = useGetProfessionalById(userId);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 "
      onClick={onClose}
    >
      <div
        className="bg-purple-50 shadow-xl rounded p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto relative border-2 border-b-purple-800"
        onClick={(e) => { e.stopPropagation(); }} // Pour empêcher la fermeture quand on clique dans la modale
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Fermer la modale"
        >
          ✕
        </button>
        {user.role === "CARESEEKER" && <CareSeekerProfile user={user} />}
        {user.role === "PROFESSIONAL" && <ProfessionalProfile user={user} />}
      </div>
    </div>
  );
}
