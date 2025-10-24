import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PropertyDetails from './pages/PropertyDetails';
import ContactForm from './components/ContactForm';
import './App.css';

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
