// src/pages/ProfessionalProfilePage.tsx
import { useParams } from "react-router-dom";
import { useGetProfessionalById } from "../../hooks/Professionals/useGetProfessionalsById.tsx";

export default function ProfessionalProfilePage() {
  const { id } = useParams<{ id: string }>();
  const endpoint = "/api/professional";
  const { professional, isLoading, error } = useGetProfessionalById(id!, endpoint);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  if (!professional?.user) return <p>Profil non trouvé</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-purple-700 mb-4">
        {professional.user.firstName} {professional.user.lastName}
      </h1>
      <p className="text-lg text-gray-700">
        Profession : {professional.profession.professionName ?? professional.profession.customProfession}
      </p>
      <p className="text-gray-600">
        Ville : {professional.user.address[0]?.city}
      </p>
      {professional.isMobile && (
        <p className="text-gray-600">
          Se déplace jusqu’à {professional.interventionRadius} km
        </p>
      )}
    </div>
  );
}
