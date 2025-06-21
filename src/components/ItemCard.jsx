const ItemCard = ({ item, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition cursor-pointer" onClick={onClick}>
      <img src={item.coverImage} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-500">{item.type}</p>
      </div>
    </div>
  );
};

export default ItemCard;
