import { useState } from "react";
import { useGetProfessions } from "../../hooks/useProfessions.tsx";
import { AdminCreateProfessionModal, AdminProfessionModal }  from "./PanelModal.tsx";

export function ProfessionsList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sortColumn, setSortColumn] = useState<keyof typeof professions[0] | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfessionId, setSelectedProfessionId] = useState<string | null>(null);
  const { professions, isLoading, error, refetch } = useGetProfessions();

  // Filtrage par recherche
  let filteredProfessions = professions;
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    filteredProfessions = professions.filter(
      p =>
        p.professionName.toLowerCase().includes(term) ||
        (p.customProfession?.toLowerCase().includes(term) ?? false) ||
        p.id.toLowerCase().includes(term)
    );
  }

  const displayedProfessions = expanded ? filteredProfessions : filteredProfessions.slice(0, 5);

  // Tri
  const sortedProfessions = [...displayedProfessions].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];
    if (valA == null) return 1;
    if (valB == null) return -1;
    if (typeof valA === "boolean" && typeof valB === "boolean") {
      return sortDirection === "asc" ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
    }
    return sortDirection === "asc"
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  const handleSort = (column: keyof typeof professions[0]) => {
    if (sortColumn === column) setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="p-0.5 mx-2 my-1 shadow-sm flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-2">
        <h2 className="text-lg font-semibold">Liste des professions</h2>

        <div className="flex flex-wrap items-center gap-2">
          <button
            className="bg-purple-500 text-white px-2 py-1 rounded-md hover:bg-purple-600 text-sm"
            onClick={() => setModalOpen(true)}
          >
            Ajouter une profession
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Rechercher..."
            className="border rounded-md px-2 py-1 text-sm flex-1 min-w-[150px]"
          />

          <select
            value={sortDirection}
            onChange={e => setSortDirection(e.target.value as "asc" | "desc")}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option value="desc">Descendant</option>
            <option value="asc">Ascendant</option>
          </select>

          <button
            onClick={refetch}
            className="bg-purple-600 text-white px-2 py-1 rounded-md hover:bg-purple-700 transition text-sm"
          >
            Rafraîchir
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300 transition text-sm"
          >
            {expanded ? "Réduire" : `Voir tout (${filteredProfessions.length})`}
          </button>
        </div>
      </div>

      {/* Loading / Error */}
      {isLoading && <p>Chargement...</p>}
      {error && <p className="text-red-600">Erreur : {error.message}</p>}

      {/* Table */}
      {!isLoading && !error && (
        <div className="overflow-auto flex-1">
          <table className="w-full border text-center">
            <thead className="bg-purple-200 sticky top-0">
              <tr>
                {[
                  { label: "ID", key: "id" },
                  { label: "Nom", key: "professionName" },
                  { label: "Profession personnalisée", key: "customProfession" },
                  { label: "Status", key: "isProfessionApproved" },
                  { label: "Actions", key: null },
                ].map(({ label, key }) => (
                  <th
                    key={label}
                    className={`border px-2 py-1 ${key ? "cursor-pointer select-none" : ""}`}
                    onClick={key ? () => handleSort(key as keyof typeof professions[0]) : undefined}
                  >
                    {label} {sortColumn === key ? (sortDirection === "asc" ? "↑" : "↓") : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedProfessions.map(p => (
                <tr key={p.id} className="hover:bg-purple-50 odd:bg-white even:bg-purple-50">
                  <td className="border px-2 py-1">{p.id}</td>
                  <td className="border px-2 py-1">{p.professionName}</td>
                  <td className="border px-2 py-1">{p.customProfession ?? "-"}</td>
                  <td className="border px-2 py-1">
                    {p.isProfessionApproved ? "Yes" : "No"}
                  </td>
                  <td className="border px-2 py-1">
                    <button
                      className="bg-purple-500 text-white px-2 py-1 rounded-md hover:bg-purple-600 text-sm"
                      onClick={() => setSelectedProfessionId(p.id)}
                    >
                      Voir / Éditer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <AdminCreateProfessionModal onClose={() => { setModalOpen(false); }}/>
      )}
      {/* Edit Modal */}
      {selectedProfessionId && (
        <AdminProfessionModal
          professionId={selectedProfessionId}
          endpoint={'/api/admin/professions'}
          onClose={() => setSelectedProfessionId(null)}
        />
      )}
    </div>
  );
}
