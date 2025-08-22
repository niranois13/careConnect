import { useEffect } from "react";

import RegisterUser from "../../features/Registration/UserRegister.tsx";

interface userModalProps {
  onClose: () => void;
}

export default function UserRegisterModal({ onClose }: userModalProps) {
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
      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-purple-50 shadow-xl rounded p-6 relative border-2 border-b-purple-800 max-h-[90vh] w-full max-w-lg overflow-y-auto"
        onClick={(e) => { e.stopPropagation(); }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Fermer la modale"
        >
          ✕
        </button>
        <RegisterUser onSuccess={onClose} />
      </div>
    </div>
  );
}
