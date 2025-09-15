import { useEffect, useState } from "react";
import { z } from 'zod';

import { careSeekerResponseSchema } from "../../../../../packages/schemas/src/users.schemas.ts";
import { useGetCareSeekerById } from "../../hooks/CareSeekers/useGetCareSeekersById.tsx";
import { useUpdateCareSeeker } from "../../hooks/CareSeekers/useUpdateCareSeeker.tsx";
import { useDeleteUser } from "../../hooks/Users/useDeleteUsers.tsx";

interface AdminUserModalProps {
  user: z.infer<typeof careSeekerResponseSchema>;
  onSuccess?: () => void;
}

export default function CareSeekerProfile({ user, onSuccess }: AdminUserModalProps) {
  const { careSeeker, isLoading, error } = useGetCareSeekerById(user.id);
  const updateCareSeeker = useUpdateCareSeeker(user.id, { onSuccess });
  const deleteCareSeeker = useDeleteUser(user.id, { onSuccess });

  const [formData, setFormData] = useState({
    createdAt: "",
    updatedAt: "",
    role: "CARESEEKER" as const,
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    emailVerified: false,
    phoneNumber: "",
    isHelper: false,
    address: {
      id: "",
      userId: "",
      createdAt: "",
      updatedAt: "",
      label: "",
      street: "",
      postalCode: "",
      city: "",
    }
  });

  useEffect(() => {
    if (careSeeker) {
      const firstAddress = careSeeker.user.address?.[0] ?? {
        id: "",
        createdAt: "",
        updatedAt: "",
        street: "",
        postalCode: "",
        city: "",
        label: "Domicile",
      };

      setFormData({
        role: "CARESEEKER" as const,
        id: careSeeker.user.id,
        createdAt: careSeeker.user.createdAt,
        updatedAt: careSeeker.user.updatedAt,
        firstName: careSeeker.user.firstName,
        lastName: careSeeker.user.lastName,
        email: careSeeker.user.email,
        emailVerified: careSeeker.user.emailVerified,
        phoneNumber: careSeeker.user.phoneNumber ?? "",
        isHelper: careSeeker.isHelper,
        address: {
          id: firstAddress.id,
          userId: careSeeker.user.id,
          createdAt: firstAddress.createdAt ?? "",
          updatedAt: firstAddress.updatedAt ?? "",
          city: firstAddress.city,
          label: firstAddress.label,
          postalCode: firstAddress.postalCode ?? "",
          street: firstAddress.street ?? "",
        }
      });
    }
  }, [careSeeker]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (["label", "street", "postalCode", "city"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;

    const payload = {
      ...formData,
      address: [formData.address],
    }

    const action = submitter.name;
    if (action == 'update')
      updateCareSeeker.mutate(payload);
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

            <div className='flex flex-wrap gap-2 mb-1 items-center'>
              <label htmlFor="label" className="text-gray-900">Rue :</label>
              <input
                id='label'
                name='label'
                type='text'
                value={formData.address.label}
                onChange={handleInputChange}
                className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
              />

              <label htmlFor="street" className="text-gray-900">Rue :</label>
              <input
                id='street'
                name='street'
                type='text'
                value={formData.address.street}
                onChange={handleInputChange}
                className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
              />
            </div>

            <div className='flex flex-wrap gap-2 mb-1 items-center'>
              <label htmlFor="postalCode" className="text-gray-900">Code postal :</label>
              <input
                id='postalCode'
                name='postalCode'
                type='text'
                value={formData.address.postalCode}
                onChange={handleInputChange}
                className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
              />
            </div>

            <div className='flex flex-wrap gap-2 mb-1 items-center'>
              <label htmlFor="city" className="text-gray-900">Ville :</label>
              <input
                id='city'
                name='city'
                type='text'
                value={formData.address.city}
                onChange={handleInputChange}
                className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
              />
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
