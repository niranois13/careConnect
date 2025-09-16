import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import BaseModal from "../BaseModal/BaseModal.tsx";
import { professionalSearchResultSchema } from "../../../../../packages/schemas/src/users.schemas.ts";
import { z } from 'zod';
import { Link } from "react-router-dom";

type ProfessionalResult = z.infer<typeof professionalSearchResultSchema>;

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  size?: "default" | "panel" | "landing";
  label?: string;
  labelPosition?: "top" | "left";
  labelStyle?: "default" | "landing" | "panel";
}

export default function SearchBar({
  placeholder = 'Exemple: "Moniteur éducateur", "Thonon-les-Bains"',
  buttonText = "Je recherche",
  size = "default",
  label,
  labelPosition = "top",
  labelStyle = "default",
}: SearchBarProps) {
  const [value, setValue] = useState("");
  const [results, setResults] = useState<ProfessionalResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sizeClasses = {
    default: "text-xs w-full max-w-75",
    panel: "text-sm w-full max-w-100",
    landing:
      "text-base w-full lg:max-w-190 md:max-w-175 sm:max-w-150 xs:max-w-100",
  };

  const labelClasses = {
    default: "font-medium",
    landing: "text-center text-2xl font-medium mb-2",
    panel: "text-purple-700 font-bold text-xl mb-2",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/search?term=${encodeURIComponent(value)}`);
      const data: unknown = await res.json();
      const parsedData = z.array(professionalSearchResultSchema).safeParse(data)
      if (!parsedData.success)
        return

      setResults(parsedData.data);
      setIsModalOpen(true);
    } catch (error: unknown) {
      console.error("Erreur recherche:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderForm = (extraClasses = "") => (
    <form
      onSubmit={handleSubmit}
      className={`flex items-stretch border-2 border-purple-700 rounded-full overflow-hidden ${extraClasses}`}
    >
      <input
        type="text"
        id="searchField"
        name="searchField"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-1 bg-purple-50 text-sm leading-6 focus:outline-none placeholder:text-center"
      />
      <button
        type="submit"
        className="bg-purple-100 hover:bg-purple-500 transition-colors border-l-2 px-4 py-1 border-purple-700"
      >
        {labelPosition === "left" ? (
          <FontAwesomeIcon
            icon={faSearch}
            size="2x"
            className="text-purple-700 hover:text-white"
          />
        ) : (
          buttonText
        )}
      </button>
    </form>
  );

  return (
    <>
      {label && labelPosition === "top" && (
        <div className={`flex flex-col items-center ${sizeClasses[size]}`}>
          <label htmlFor="searchField" className={labelClasses[labelStyle]}>
            {label}
          </label>
          {renderForm(sizeClasses[size])}
        </div>
      )}

      {label && labelPosition === "left" && (
        <div>
          <label htmlFor="searchField" className="sr-only">
            {label}
          </label>
          {renderForm(sizeClasses[size])}
        </div>
      )}

      {isModalOpen && (
        <BaseModal onClose={() => setIsModalOpen(false)}>
          {loading ? (
            <p className="text-center text-purple-700">Chargement...</p>
          ) : results.length > 0 ? (
            <div>
              <h2 className="text-lg font-bold text-purple-700 mb-4">
                Résultats de la recherche
              </h2>
              <ul className="list-disc pl-4 space-y-2">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/professional/${p.id}`}
                      className="text-purple-800 hover:underline"
                    >
                      {p.firstName} {p.lastName} – {" "}
                      {p.professionName ?? p.customProfession} – {" "}
                      {p.city} – {" "}
                      {p.isMobile ?
                        `Se déplace sur ${p.interventionRadius}km`
                        : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-center">Aucun résultat trouvé</p>
          )}
        </BaseModal>
      )}
    </>
  );
}
