import { useState } from "react";
import { useCreateProfession } from "../../hooks/Professions/useCreateProfession.tsx";

export default function ProfessionCreate({ onSuccess }: { onSuccess: () => void }) {
  const createProfessionMutation = useCreateProfession("/api/admin/professions", { onSuccess });
  const [formData, setFormData] = useState({
    professionName: "",
    customProfession: "",
    isProfessionApproved: false,
  });

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
    createProfessionMutation.mutate(formData);
  };

  return (
    <>
      <form aria-label="form" onSubmit={handleSubmit} className="ml-10">
        <div className='mb-3'>
          <h2 className='text-lg mb-1 font-semibold text-gray-900 ml-5'>Profession</h2>

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

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full max-w-2/3 p-2.5 font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Valider la nouvelle profession
          </button>
        </div>
      </form>
    </>
  );

}
