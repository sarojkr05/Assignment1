const ItemModal = ({ item, onClose }) => {
  const handleEnquire = () => {
    // Simulate sending enquiry email
    console.log(`Sending enquiry for ${item.name} to example@email.com`);
    alert("Enquiry email sent!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xl w-full relative">
        <button className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold text-indigo-700 mb-1">{item.name}</h2>
        <p className="mb-2 text-sm text-gray-500">{item.type}</p>
        <p className="mb-4 text-gray-700">{item.description}</p>
        <div className="space-y-2">
          <img src={item.coverImage} alt="Cover" className="w-full h-56 object-cover rounded-md" />
          {item.additionalImages?.map((img, idx) => (
            <img key={idx} src={img} alt={`Additional ${idx}`} className="w-full h-32 object-cover rounded-md" />
          ))}
        </div>
        <button
          onClick={handleEnquire}
          className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg"
        >
          Enquire
        </button>
      </div>
    </div>
  );
};

export default ItemModal;