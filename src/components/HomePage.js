import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        {/* Content below the navbar */}
        <div>
          <h1>Welcome to Our Website</h1>
          <p>This is the content below the navbar.</p>
        </div>
      </main>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: '#87CEEB', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <div className="logo">
        <img src="company-logo.png" alt="Company Logo" style={{ maxWidth: '100px' }} />
      </div>
      <div className="menu" style={{ display: 'flex' }}>
        <Link to="/AboutUsPage" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }} >
          About Us
        </Link>
        <Link to="/SolutionsForPage" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }} >
          Solutions For
        </Link>
        <Link to="/ClientsPage" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }} >
          Our Clients
        </Link>
        <Link to="/TechnologyPage" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }} >
          Technology Used
        </Link>
        <Link to="/ContactUsPage" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }} >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default HomePage;
