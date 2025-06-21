import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ItemForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  };

  const onSubmit = async (data) => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    const coverImage = await convertToBase64(data.coverImage[0]);
    const additionalImages = data.additionalImages.length
      ? await Promise.all(Array.from(data.additionalImages).map(file => convertToBase64(file)))
      : [];

    const newItem = {
      id: Date.now(),
      name: data.name,
      type: data.type,
      description: data.description,
      coverImage,
      additionalImages,
    };

    localStorage.setItem('items', JSON.stringify([...storedItems, newItem]));
    toast.success('Item successfully added');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input {...register('name')} placeholder="Item Name" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm" required />
      <input {...register('type')} placeholder="Item Type (e.g., Shirt, Pant)" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm" required />
      <textarea {...register('description')} placeholder="Item Description" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm" required />
      <div>
        <label className="block mb-1 font-medium">Cover Image:</label>
        <input type="file" {...register('coverImage')} accept="image/*" className="w-full" required />
      </div>
      <div>
        <label className="block mb-1 font-medium">Additional Images:</label>
        <input type="file" {...register('additionalImages')} accept="image/*" multiple className="w-full" />
      </div>
      <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">Submit</button>
    </form>
  );
};

export default ItemForm;