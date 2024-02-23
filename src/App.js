// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ClientsPage from './components/ClientsPage';
import ContactUsPage from './components/ContactUsPage';
import TechnologyPage from './components/TechnologyPage';
import SolutionsForPage from './components/SolutionsForPage';
import AboutUsPage from './components/AboutUsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ClientsPage" element={<ClientsPage />} />
        <Route path="/ContactUsPage" element={<ContactUsPage />} />
        <Route path="/TechnologyPage" element={<TechnologyPage />} />
        <Route path="/SolutionsForPage" element={<SolutionsForPage />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
