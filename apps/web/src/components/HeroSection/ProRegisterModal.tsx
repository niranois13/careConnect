import { useEffect } from "react";

import RegisterPro from "../../features/Registration/ProRegister.tsx";

interface proModalProps {
  onClose: () => void;
}

export default function ProRegisterModal({ onClose }: proModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
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
        <RegisterPro onSuccess={onClose}/>
      </div>
    </div>
  );
}
