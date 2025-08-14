import { useEffect } from "react";

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
      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 "
      onClick={onClose}
    >
      <div
        className="bg-purple-50 shadow-xl rounded p-6 w-100 relative border-2 border-b-purple-800"
        onClick={(e) => { e.stopPropagation(); }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Fermer la modale"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
