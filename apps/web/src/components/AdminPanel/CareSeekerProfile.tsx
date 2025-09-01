import { useState, useEffect } from "react";
import { useGetCareSeekerById } from "../../hooks/CareSeekers/useGetCareSeekersById.tsx";
import { useUpdateCareSeeker } from "../../hooks/CareSeekers/useUpdateCareSeeker.tsx";
import { userResponseSchema } from "../../../../../packages/schemas/src/users.schemas.ts";
import { z } from 'zod';
import { useDeleteUser } from "../../hooks/Users/useDeleteUsers.tsx";

interface AdminUserModalProps {
  user: z.infer<typeof userResponseSchema>;
  onSuccess?: () => void;
}

export default function CareSeekerProfile({ user, onSuccess }: AdminUserModalProps) {
  const { careSeeker, isLoading, error } = useGetCareSeekerById(user.id);
  const updateCareSeeker = useUpdateCareSeeker(user.id, { onSuccess });
  const deleteCareSeeker = useDeleteUser(user.id, { onSuccess });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailVerified: false,
    phoneNumber: "",
    isHelper: false,
  });

  useEffect(() => {
    if (careSeeker && careSeeker.user) {
      setFormData({
        firstName: careSeeker.user.firstName,
        lastName: careSeeker.user.lastName,
        email: careSeeker.user.email,
        emailVerified: careSeeker.user.emailVerified,
        phoneNumber: careSeeker.user.phoneNumber ?? "",
        isHelper: careSeeker.isHelper,
      });
    }
  }, [careSeeker]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;
    if (!submitter)
      return;

    const action = submitter.name;
    if (action == 'update')
      updateCareSeeker.mutate(formData);
    if (action == 'delete')
      deleteCareSeeker.mutate(user.id);
  };

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {String(error)}</p>;

  return (
    <>
      {careSeeker && (
        <form aria-label="form" onSubmit={handleSubmit} className="ml-10">
          <div className='mb-3'>

            <h2 className='text-lg mb-1 font-semibold text-gray-900 ml-5'>Profil</h2>

            <div className='flex flex-row flex-wrap gap-2 items-center mb-2'>
              <label htmlFor='id' className="text-gray-900">ID :</label>
              <input
                id='id'
                name='id'
                type='text'
                readOnly
                value={careSeeker.user.id}
                className="w-full max-w-1/2 p-1 text-gray-900 font-medium"
              />
            </div>

            <div className='flex flex-wrap gap-5 mb-2'>
              <p className="block mb-1 text-sm text-gray-900">Créé le : <strong>{new Date(careSeeker.user.createdAt).toLocaleDateString("fr-FR")}</strong></p>
              <p className="block mb-1 text-sm text-gray-900">Dernière modification : <strong>{new Date(careSeeker.user.updatedAt).toLocaleDateString("fr-FR")}</strong></p>
            </div>

            <div className='flex flex-row flex-wrap items-center gap-4 mb-2'>
              <div className='flex flex-wrap gap-2 mb-1 items-center'>
                <label htmlFor='firstName' className="text-gray-900">Prénom :</label>
                <input
                  id='firstName'
                  name='firstName'
                  type='text'
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
                />
              </div>
              <div className='flex flex-wrap gap-5 mb-1 items-center'>
                <label htmlFor='lastName' className="text-gray-900">Nom :</label>
                <input
                  id='lastName'
                  name='lastName'
                  type='text'
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
                />
              </div>
            </div>

            <div className='flex flex-row flex-wrap items-center gap-4 mb-2'>
              <div className='flex flex-wrap gap-2 mb-1 items-center'>
                <label htmlFor="email" className="text-gray-900">Email :</label>
                <input
                  id='email'
                  name='email'
                  type='text'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
                />
              </div>
              <div className='flex flex-wrap gap-2 mb-1 items-center'>
                <label htmlFor="emailVerified" className="text-gray-900">Email vérifié ?</label>
                <input
                  id="emailVerified"
                  name="emailVerified"
                  type="checkbox"
                  checked={formData.emailVerified}
                  onChange={handleCheckboxChange}
                  className=' checked:bg-purple-300 p-0 m-0 default:bg-gray-50 w-5 h-5 border-gray-300 border-2 rounded-sm focus:ring-purple-500 focus:border-purple-500'
                />
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mb-1 items-center'>
              <label htmlFor="phoneNumber" className="text-gray-900">Téléphone :</label>
              <input
                id='phoneNumber'
                name='phoneNumber'
                type='text'
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
              />
            </div>
            <div className='flex flex-wrap gap-2 mb-1 items-center'>
              <label htmlFor="isHelper" className="text-gray-900">Personne aidante ?</label>
              <input
                id='isHelper'
                name='isHelper'
                type='checkbox'
                checked={formData.isHelper}
                onChange={handleCheckboxChange}
                className=' checked:bg-purple-300 p-0 m-0 default:bg-gray-50 w-5 h-5 border-gray-300 border-2 rounded-sm focus:ring-purple-500 focus:border-purple-500'
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              name="update"
              className="w-full max-w-2/3 p-2.5 font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              Valider les changements
            </button>
            <button
              type="submit"
              name="delete"
              className="w-full max-w-2/3 p-2.5 font-medium text-white bg-red-500 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Supprimer l'utilisateur
            </button>
          </div>
        </form>
      )}
    </>
  );

}
