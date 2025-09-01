import { useState, useEffect } from "react";
import { useGetProfessionById } from "../../hooks/Professions/useGetProfessionsById.tsx";
import { useUpdateProfession } from "../../hooks/Professions/useUpdateProfession.tsx";
import { useDeleteProfession } from "../../hooks/Professions/useDeleteProfessions.tsx";

interface AdminProfessionModalProps {
  professionId: string;
  endpoint: string;
  onSuccess?: () => void;
}

export default function ProfessionDetail({ professionId, endpoint, onSuccess }: AdminProfessionModalProps) {
  const { profession, isLoading, error } = useGetProfessionById(professionId, endpoint);
  const updateProfession = useUpdateProfession(professionId, { onSuccess });
  const deleteProfession = useDeleteProfession(professionId, { onSuccess });

  const [formData, setFormData] = useState({
    professionName: "",
    customProfession: "",
    isProfessionApproved: false,
  });

  useEffect(() => {
    if (profession) {
      setFormData({
        professionName: profession.professionName,
        customProfession: profession.customProfession ?? "",
        isProfessionApproved: profession.isProfessionApproved,
      });
    }
  }, [profession]);

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
      updateProfession.mutate(formData);
    if (action == 'delete')
      deleteProfession.mutate(professionId);
  };

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {String(error)}</p>;

  return (
    <>
      {profession && (
        <form aria-label="form" id='profession-form' onSubmit={handleSubmit} className="ml-10">
          <div className='mb-3'>
            <h2 className='text-lg mb-1 font-semibold text-gray-900 ml-5'>Profession</h2>
            <div className='flex flex-row flex-wrap gap-2 items-center mb-2'>
              <label htmlFor='id' className="text-gray-900">ID :</label>
              <input
                id='id'
                name='id'
                type='text'
                readOnly
                value={profession.id}
                className="w-full max-w-1/2 p-1 text-gray-900 font-medium"
              />
            </div>

            <div className='flex flex-wrap gap-5 mb-2'>
              <p className="block mb-1 text-sm text-gray-900">Créée le : <strong>{new Date(profession.createdAt).toLocaleDateString("fr-FR")}</strong></p>
              <p className="block mb-1 text-sm text-gray-900">Dernière modification : <strong>{new Date(profession.updatedAt).toLocaleDateString("fr-FR")}</strong></p>
            </div>

            <div className='flex flex-row flex-wrap gap-2 items-center mb-2'>
              <label htmlFor='professionName' className="text-gray-900">Titre :</label>
              <input
                id='professionName'
                name='professionName'
                type='text'
                onChange={handleInputChange}
                value={formData.professionName}
                className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
              />
            </div>
            <div className='flex flex-row flex-wrap gap-2 items-center mb-2'>
              <label htmlFor='customProfession' className="text-gray-900">Profession personnalisée :</label>
              <input
                id='customProfession'
                name='customProfession'
                type='text'
                onChange={handleInputChange}
                value={formData.customProfession}
                className='font-medium text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 pl-3 py-1'
              />
            </div>
            <div className='flex flex-row flex-wrap gap-2 items-center mb-2'>
              <label htmlFor='isProfessionApproved' className="text-gray-900">Validée ?</label>
              <input
                id='isProfessionApproved'
                name='isProfessionApproved'
                type='checkbox'
                onChange={handleCheckboxChange}
                checked={formData.isProfessionApproved}
                className=' checked:bg-purple-300 p-0 m-0 default:bg-gray-50 w-5 h-5 border-gray-300 border-2 rounded-sm focus:ring-purple-500 focus:border-purple-500'
              />
            </div>
          </div>

          <div className='mb-3'>
            <h2 className='text-lg mb-1 font-semibold text-gray-900 ml-5'>Créée par : </h2>
            <div className='flex flex-row flex-wrap items-center gap-4 mb-2'>
              <div className='flex flex-wrap gap-2 mb-1 items-center'>
                <label htmlFor='firstName' className="text-gray-900">Prénom :</label>
                <input
                  id='firstName'
                  name='firstName'
                  type='text'
                  value={profession.professionals[0]?.user?.firstName ?? "Admin"}
                  readOnly
                  className="w-full max-w-1/2 p-1 text-gray-900 font-medium" />
              </div>
              <div className='flex flex-wrap gap-5 mb-1 items-center'>
                <label htmlFor='lastName' className="text-gray-900">Nom :</label>
                <input
                  id='lastName'
                  name='lastName'
                  type='text'
                  value={profession.professionals[0]?.user?.lastName ?? "Admin"}
                  readOnly
                  className="w-full max-w-1/2 p-1 text-gray-900 font-medium" />
              </div>
            </div>

            <div className='flex flex-row flex-wrap items-center gap-4 mb-2'>
              <div className='flex flex-wrap gap-2 mb-1 items-center'>
                <label htmlFor="email" className="text-gray-900">Email :</label>
                <input
                  id='email'
                  name='email'
                  type='text'
                  value={profession.professionals[0]?.user?.email ?? ""}
                  readOnly
                  className="w-full max-w-1/2 p-1 text-gray-900 font-medium" />
              </div>
            </div>
          </div>

          <div className="flex justify-around">
            <div className="w-full max-w-2/5 flex flex-col justify-center text-center">
              <p className="text-xs">Avant de valider une profession personnalisée, veuillez respecter la norme des intitulés: </p>
              <p className="text-xs">ex: "chiropracteur" devient "Chiropracteur.rice"</p>
              <button
                type="submit"
                name='update'
                className="p-2.5 font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-3 focus:ring-purple-300"
              >
                Valider les changements
              </button>
            </div>
            <div className="w-full max-w-2/5 flex flex-col justify-center text-center">
              <p className="text-xs">Attention</p>
              <p className="text-xs">Cette action est irrémédiable et impactera les utilisateurs concernés</p>
              <button
                type="submit"
                name='delete'
                className=" p-2.5 font-medium text-white bg-red-500 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-3 focus:ring-red-300"
              >
                Refuser ou Supprimer la profession
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );

}
