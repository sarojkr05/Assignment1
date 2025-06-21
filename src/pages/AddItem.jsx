import ItemForm from '../components/ItemForm';

const AddItem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Add New Item</h2>
        <ItemForm />
      </div>
    </div>
  );
};

export default AddItem;