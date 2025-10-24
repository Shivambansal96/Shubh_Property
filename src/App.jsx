import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/contact/:propertyId" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
