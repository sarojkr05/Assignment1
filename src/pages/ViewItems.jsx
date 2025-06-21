import { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import ItemModal from '../components/ItemModal';

const ViewItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('items')) || [];
    setItems(stored);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-indigo-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">View Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
        {selectedItem && (
          <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>
    </div>
  );
};

export default ViewItems;