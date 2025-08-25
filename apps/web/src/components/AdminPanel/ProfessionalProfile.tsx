import { useState, useEffect } from "react";
import { useGetProfessionalById } from "../../hooks/useGetUsers.tsx";
import { useUpdateProfessional } from "../../hooks/useUpdateProfessional.tsx";
import { userResponseSchema } from "../../../../../packages/schemas/src/users.schemas.ts";
import { z } from 'zod';

interface AdminUserModalProps {
  user: z.infer<typeof userResponseSchema>;
}

export default function ProfessionalProfile({ user }: AdminUserModalProps) {
  const { professional, isLoading, error } = useGetProfessionalById(user.id);
  const updateProfessional = useUpdateProfessional(user.id);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailVerified: false,
    phoneNumber: "",
    siret: "",
    isSiretValid: false,
    professionId: "",
    professionName: "",
    customProfession: "",
    isProfessionApproved: false,
    isMobile: false,
    interventionRadius: 0,
  });

  useEffect(() => {
    if (professional && professional.user && professional.profession) {
      setFormData({
        firstName: professional.user.firstName,
        lastName: professional.user.lastName,
        email: professional.user.email,
        emailVerified: professional.user.emailVerified,
        phoneNumber: professional.user.phoneNumber ?? "",
        siret: professional.siret ?? "",
        isSiretValid: professional.isSiretValid,
        professionId: professional.profession.id,
        professionName: professional.profession.professionName ?? "",
        customProfession: professional.profession.customProfession ?? "",
        isProfessionApproved: professional.profession.isProfessionApproved,
        isMobile: professional.isMobile,
        interventionRadius: professional.interventionRadius,
      });
    }
  }, [professional]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateProfessional.mutate(formData);
  };

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {String(error)}</p>;

  return (
    <>
      {professional && (
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
                value={professional.user.id}
                className="w-full max-w-1/2 p-1 text-gray-900 font-medium"
              />
            </div>

            <div className='flex flex-wrap gap-5 mb-2'>
              <p className="block mb-1 text-sm text-gray-900">Créé le : <strong>{new Date(professional.user.createdAt).toLocaleDateString("fr-FR")}</strong></p>
              <p className="block mb-1 text-sm text-gray-900">Dernière modification : <strong>{new Date(professional.user.updatedAt).toLocaleDateString("fr-FR")}</strong></p>
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

            <div className='flex flex-row flex-wrap items-center gap-4 mb-2'>
              <div className='flex flex-wrap gap-2 mb-1 items-center'>
                <label htmlFor='siret' className="text-gray-900">SIRET :</label>
                <input
                  id='siret'
                  name='siret'
                  type='text'
                  value={formData.siret}
                  readOnly
                  className='w-full max-w-1/2 font-medium text-gray-900'
                />
              </div>
              <div className='flex flex-wrap gap-2 mb-1 items-center'>
                <label htmlFor="isSiretValid" className="text-gray-900">SIRET vérifié ?</label>
                <input
                  id="isSiretValid"
                  name="isSiretValid"
                  type="checkbox"
                  checked={formData.isSiretValid}
                  onChange={handleCheckboxChange}
                  className=' checked:bg-purple-300 p-0 m-0 default:bg-gray-50 w-5 h-5 border-gray-300 border-2 rounded-sm focus:ring-purple-500 focus:border-purple-500'
                />
              </div>
            </div>
          </div>

          <div>

            <h2 className='text-lg mb-1 font-semibold text-gray-900 ml-5'>Professionnel</h2>

            <div className='flex flex-row flex-wrap gap-2 items-center mb-2'>
              <label htmlFor='professionId' className="text-gray-900">ID de la profession :</label>
              <input
                id='professionId'
                name='professionId'
                type='text'
                readOnly
                value={formData.professionId}
                className='w-full max-w-1/2 p-1 font-medium text-gray-900'
              />
            </div>
            <div className='flex flex-row  flex-wrap items-center gap-4 mb-2'>
              <label htmlFor='professionName' className="text-gray-900">Profession :</label>
              <input
                id='professionName'
                name='professionName'
                type='text'
                value={formData.professionName}
                onChange={handleInputChange}
                className='font-medium w-full max-w-1/2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
              />
            </div>

            <div className='flex flex-row flex-wrap gap-2 items-center mb-2'>
              <div className='flex flex-row flex-wrap items-center gap-4 mb-2'>
                <label htmlFor='customProfession' className="text-gray-900">Profession personnalisée :</label>
                <input
                  id='customProfession'
                  name='customProfession'
                  type='text'
                  value={formData.customProfession}
                  onChange={handleInputChange}
                  className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
                />
              </div>
              <div className='flex flex-wrap gap-5 mb-1 items-center'>
                <label htmlFor="isProfessionApproved" className="text-gray-900">Profession validée ?</label>
                <input
                  id="isProfessionApproved"
                  name="isProfessionApproved"
                  type="checkbox"
                  checked={formData.isProfessionApproved}
                  onChange={handleCheckboxChange}
                  className=' checked:bg-purple-300 p-0 m-0 default:bg-gray-50 w-5 h-5 border-gray-300 border-2 rounded-sm focus:ring-purple-500 focus:border-purple-500'
                />
              </div>
            </div>

            <div className='flex flex-row flex-wrap gap-2 items-center mb-2'>
              <div className='flex flex-wrap gap-5 mb-1 items-center'>
                <label htmlFor="isMobile" className="text-gray-900">Déplacements ?</label>
                <input
                  id="isMobile"
                  name="isMobile"
                  type="checkbox"
                  checked={formData.isMobile}
                  onChange={handleCheckboxChange}
                  className=' checked:bg-purple-300 p-0 m-0 default:bg-gray-50 w-5 h-5 border-gray-300 border-2 rounded-sm focus:ring-purple-500 focus:border-purple-500'
                />
              </div>
              <div className='flex flex-wrap gap-4 mb-2 items-center'>
                <label htmlFor='interventionRadius' className="text-gray-900">Rayon de déplacement (km) :</label>
                <input
                  id='interventionRadius'
                  name='interventionRadius'
                  type='number'
                  value={formData.interventionRadius}
                  onChange={handleNumberChange}
                  className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full max-w-2/3 p-2.5 font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Valider les changements
            </button>
          </div>
        </form>
      )}
    </>
  );

}
