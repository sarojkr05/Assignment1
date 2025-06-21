import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './pages/AddItem';
import ViewItems from './pages/ViewItems';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <Link to="/" className="font-semibold hover:underline">View Items</Link>
        <Link to="/add" className="font-semibold hover:underline">Add Item</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ViewItems />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;