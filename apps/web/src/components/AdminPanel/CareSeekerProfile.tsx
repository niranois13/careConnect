import { useGetCareSeekerById } from "../../hooks/useGetUsers.tsx";

import { userResponseSchema } from "../../../../../packages/schemas/src/users.schemas.ts";
import { z } from "zod";

interface AdminUserModalProps {
  user: z.infer<typeof userResponseSchema>;
}

export default function CareSeekerProfile({ user }: AdminUserModalProps) {
  const { careSeeker, isLoading, error } = useGetCareSeekerById(user.id);


  return (
    <>
      {isLoading && <p>Chargement...</p>}
      {error && <p className="text-red-600">{error.message}</p>}
      {careSeeker && (
        <div>
          <p><strong>ID:</strong> {careSeeker.id}</p>
          <p><strong>Nom:</strong> {careSeeker.firstName} {careSeeker.lastName}</p>
          <p><strong>Email:</strong> {careSeeker.email}</p>
          <p><strong>Rôle:</strong> {careSeeker.role}</p>
          <p><strong>Créé le:</strong> {new Date(careSeeker.createdAt).toLocaleDateString("fr-FR")}</p>
          {/* Here you can add edit/delete buttons or other details */}
        </div>
      )}
    </>
  );

}
