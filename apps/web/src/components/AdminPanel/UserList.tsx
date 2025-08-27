import { useState } from "react";
import { useGetUsers } from "../../hooks/useGetUsers.tsx";
import { AdminUserModal } from "./PanelModal.tsx";

export function UserList() {
  const [sortColumn, setSortColumn] = useState<keyof typeof users[0] | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [expanded, setExpanded] = useState(false);
  const [filterRole, setFilterRole] = useState<"ADMIN" | "CARESEEKER" | "PROFESSIONAL" | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);
  const { users, isLoading, error, refetch } = useGetUsers(sortDirection);

  let filteredUsers = filterRole ? users.filter(u => u.role === filterRole) : users;

  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    filteredUsers = filteredUsers.filter(
      u =>
        u.firstName.toLowerCase().includes(term) ||
        u.lastName.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term) ||
        u.id.toLowerCase().includes(term)
    );
  }

  const displayedUsers = expanded ? filteredUsers : filteredUsers.slice(0, 5);

  const sortedUsers = [...displayedUsers].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];
    if (valA == null) return 1;
    if (valB == null) return -1;
    if (valA instanceof Date && valB instanceof Date) {
      return sortDirection === "asc" ? valA.getTime() - valB.getTime() : valB.getTime() - valA.getTime();
    }
    return sortDirection === "asc" ? String(valA).localeCompare(String(valB)) : String(valB).localeCompare(String(valA));
  });

  const handleSort = (column: keyof typeof users[0]) => {
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
        <h2 className="text-lg font-semibold">Liste des utilisateurs</h2>

        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Rechercher..."
            className="border rounded-md px-2 py-1 text-sm flex-1 min-w-[150px]"
          />

          <button className={`px-2 py-1 rounded-md text-sm border ${filterRole === "ADMIN" ? "bg-purple-600 text-white" : "bg-white"}`}
            onClick={() => setFilterRole(filterRole === "ADMIN" ? null : "ADMIN")}>Admin</button>
          <button className={`px-2 py-1 rounded-md text-sm border ${filterRole === "CARESEEKER" ? "bg-purple-600 text-white" : "bg-white"}`}
            onClick={() => setFilterRole(filterRole === "CARESEEKER" ? null : "CARESEEKER")}>CareSeeker</button>
          <button className={`px-2 py-1 rounded-md text-sm border ${filterRole === "PROFESSIONAL" ? "bg-purple-600 text-white" : "bg-white"}`}
            onClick={() => setFilterRole(filterRole === "PROFESSIONAL" ? null : "PROFESSIONAL")}>Professional</button>

          <select value={sortDirection} onChange={e => setSortDirection(e.target.value as "asc" | "desc")} className="border rounded-md px-2 py-1 text-sm">
            <option value="desc">Plus récents</option>
            <option value="asc">Plus anciens</option>
          </select>

          <button onClick={refetch} className="bg-purple-600 text-white px-2 py-1 rounded-md hover:bg-purple-700 transition text-sm">Rafraîchir</button>
          <button onClick={() => setExpanded(!expanded)} className="bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300 transition text-sm">
            {expanded ? "Réduire" : `Voir tout (${filteredUsers.length})`}
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
                  { label: "Prénom", key: "firstName" },
                  { label: "Nom", key: "lastName" },
                  { label: "Email", key: "email" },
                  { label: "Rôle", key: "role" },
                  { label: "Créé le", key: "createdAt" },
                  { label: "Actions", key: null },
                ].map(({ label, key }) => (
                  <th
                    key={label}
                    className={`border px-2 py-1 ${key ? "cursor-pointer select-none" : ""}`}
                    onClick={key ? () => handleSort(key as keyof typeof users[0]) : undefined}
                  >
                    {label} {sortColumn === key ? (sortDirection === "asc" ? "↑" : "↓") : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map(u => (
                <tr key={u.id} className="hover:bg-purple-50 odd:bg-white even:bg-purple-50">
                  <td className="border px-2 py-1">{u.id}</td>
                  <td className="border px-2 py-1">{u.firstName}</td>
                  <td className="border px-2 py-1">{u.lastName}</td>
                  <td className="border px-2 py-1">{u.email}</td>
                  <td className="border px-2 py-1">{u.role}</td>
                  <td className="border px-2 py-1">{new Date(u.createdAt).toLocaleDateString("fr-FR")}</td>
                  <td className="border px-2 py-1">
                    <button
                      className="bg-purple-500 text-white px-2 py-1 rounded-md hover:bg-purple-600 text-sm"
                      onClick={() => setSelectedUser(u)}
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

      {/* Modal */}
      {selectedUser && (
        <AdminUserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  )
}
