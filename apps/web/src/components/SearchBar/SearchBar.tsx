import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  size?: "default" | "panel" | "landing";
  label?: string;
  labelPosition?: "top" | "left";
  labelStyle?: "default" | "landing" | "panel";
  onSubmit?: (value: string) => void;
}

export default function SearchBar({
  placeholder = 'Exemple: "Moniteur éducateur", "Thonon-les-Bains"',
  buttonText = "Je recherche",
  size = "default",
  label,
  labelPosition = "top",
  labelStyle = "default",
  onSubmit,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const sizeClasses = {
    default: "text-xs w-full max-w-75",
    panel: "text-sm w-full max-w-100",
    landing: "text-base w-full lg:max-w-190 md:max-w-175 sm:max-w-150 xs:max-w-100",
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
        <label htmlFor="searchField" className={labelClasses[labelStyle]}>{label}</label>
        <form
          onSubmit={handleSubmit}
          className={`flex items-stretch border-2 border-purple-700 rounded-full overflow-hidden ${sizeClasses[size]}`}
        >
          <input
            type="text"
            id="searchField"
            name="searchField"
            value={value}
            onChange={(e) => { setValue(e.target.value); }}
            placeholder={placeholder}
            className="flex-1 px-4 py-1 bg-purple-50 text-sm leading-6 focus:outline-none placeholder:text-center"
          />
          <button
            type="submit"
            className="bg-purple-100 hover:bg-purple-500 transition-colors border-l-2 px-4 py-1 border-purple-700"
          >
            {buttonText}
          </button>
        </form>
      </div>
    )
  }


  if (label && labelPosition === "left") {
    return (
      <div>
        <label htmlFor="searchField" className='sr-only'>
          {label}
        </label>
        <form
          onSubmit={handleSubmit}
          className={`flex items-stretch border-2 border-purple-700 rounded-full overflow-hidden ${sizeClasses[size]}`}
        >
          <input
            type="text"
            id="searchField"
            value={value}
            onChange={(e) => { setValue(e.target.value); }}
            placeholder={placeholder}
            className='px-4 py-1 bg-purple-50 text-sm leading-6 focus:outline-none placeholder:text-center'
          />
          <button
            type="submit"
            className="
              bg-purple-100
              hover:bg-purple-500
              flex
              items-center
              justify-center
              border-l-2
              px-2
              py-1
              border-purple-700
              "
          >
            <FontAwesomeIcon icon={faSearch} size='2x' className='text-purple-700 hover:text-white' />
          </button>
        </form>
      </div>
    );
  }
}
