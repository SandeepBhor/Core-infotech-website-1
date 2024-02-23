// HomePage.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <AppBar position="static">
        <Tabs>
          <Tab label={<Link to="/">About Us</Link>} />
          <Tab label={<Link to="/solutions-for">Solutions For</Link>} />
          <Tab label={<Link to="/our-clients">Our Clients</Link>} />
          <Tab label={<Link to="/technology-used">Technology Used</Link>} />
          <Tab label={<Link to="/ContactUspage">Contact Us</Link>} />
        </Tabs>
      </AppBar>

      <Outlet /> {/* This is where the content for child routes will be rendered */}

      {/* Add other content for the home page */}
      <h1>About Us</h1>
      <p>
        Custom Application Development With constant changes in technologies and business requirements...
      </p>
    </div>
  );
}

export default HomePage;
