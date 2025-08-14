import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  labelPosition?: "top" | "left";
  labelStyle?: "default" | "landing" | "panel";
  onSubmit?: (value: string) => void;
}

export default function SearchBar({
  placeholder = 'Exemple: "Moniteur éducateur", "Thonon-les-Bains"',
  buttonText = "Je recherche",
  size = "md",
  label,
  labelPosition = "top",
  labelStyle = "default",
  onSubmit,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const sizeClasses = {
    sm: "text-xs w-full max-w-75",
    md: "text-sm w-full max-w-100",
    lg: "text-base w-full max-w-150",
  };

  const labelClasses = {
    default: "font-medium",
    landing: "text-center text-2xl font-medium mb-2",
    panel: "text-purple-700 font-bold text-xl mb-2",
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  if (label && labelPosition === "top") {
      return (
      <div className={`flex flex-col items-center ${sizeClasses[size]}`}>
          <label className={labelClasses[labelStyle]}>{label}</label>
        <form
          onSubmit={handleSubmit}
          className={`flex items-stretch border-2 border-purple-700 rounded-full overflow-hidden ${sizeClasses[size]}`}
        >
          <input
            type="text"
            name="searchField"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-1 bg-purple-100 text-sm leading-6 focus:outline-none placeholder:text-center"
          />
          <button
            type="submit"
            className="bg-purple-200 hover:bg-purple-500 transition-colors border-l-2 px-4 py-1 border-purple-700"
          >
            {buttonText}
          </button>
        </form>
      </div>
    )
  }
}
