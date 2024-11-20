import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, Link } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';


const technologies = [
  { category: 'Desktop development (Windows/Linux)', tools: ['C# WinForms', 'Avalonia UI'] },
  { category: 'Web development', tools: ['ASP.NET', 'Vue JS', 'React JS', 'PHP'] },
  { category: 'Mobile Development', tools: ['Flutter', 'React Native', 'Ionic'] },
  { category: 'Backend Storage', tools: ['MS SQL', 'My SQL'] },
  { category: 'AI', tools: ['Python'] },
];

const clientsData = [
  { name: 'Detco Textiles Pvt Ltd', link: 'https://detcogroup.com/index.html' },
  { name: 'Remco Silk Mills Private Limited' },
  { name: 'Ujagar Prints & processor Private Limited' },
  { name: 'SuperShuttle Logistics Private Limited', link: 'https://www.supershuttle.co.in/index.html' },
  { name: 'Sri Srinivasa Roadlines', link: 'https://ssrlindia.com/cms.php?cat_id=1189' },
  { name: 'Udaipur Golden Transport Company' },
  { name: 'Dupen Laboratories Pvt. Ltd.' },
];

const businessPartnersData = [
  { name: 'Arohi Operations Private Limited', link: 'http://www.arohioperations.com' },
  { name: 'Paras Software Services' }
];

const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState('AboutUsPage');

  const handleLinkClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar onLinkClick={handleLinkClick} />
        <div className="content-below-navbar">
          {selectedPage === 'AboutUsPage' && <AboutUsPage />}
          {selectedPage === 'SolutionsForPage' && <SolutionsForPage />}
          {selectedPage === 'ClientsPage' && <ClientsPage />}
          {selectedPage === 'TechnologyPage' && <TechnologyPage />}
          {selectedPage === 'ContactUsPage' && <ContactUsPage />}
          {selectedPage === null && (
            <>
              <h1>Welcome to Our Website!</h1>
              <p>This is the default content below the navbar.</p>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

const Navbar = ({ onLinkClick }) => {
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <div className="logo">
        <img src="company-logo.png" alt="Company Logo" style={{ maxWidth: '100px' }} />
      </div>
      <div className="menu" style={{ display: 'flex' }}>
        <NavLink onClick={() => onLinkClick('AboutUsPage')}>About Us</NavLink>
        <NavLink onClick={() => onLinkClick('SolutionsForPage')}>Solutions For</NavLink>
        
        <NavLink onClick={() => onLinkClick('TechnologyPage')}>Technology Used</NavLink>
        <NavLink onClick={() => onLinkClick('ContactUsPage')}>Contact Us</NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ onClick, children }) => {
  return (
    <div style={{ color: 'black', marginRight: '50px', cursor: 'pointer', fontWeight:'600' }} onClick={onClick}>
      {children}
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div >
      <div className="about-us-container">
        <div className="center-container">
          <h1 className="about-us-heading">About Us</h1>
        </div>
        <h2 className="section-heading">Custom Application Development</h2>
        <p>
          With constant changes in technologies and business requirements, there comes the need for a partner who understands your requirement and technically gives you the best possible solution by way of customized application. We not only focus on application development but also have an edge with the successful implementation, management, migration, and maintenance of your application with our team of experienced analysts, programmers, and support staff.
        </p>
        <p>
          We create, deploy & support our feature-rich applications which will help you to improve your business because our solutions are developed keeping in mind the industry-specific needs of customers. We help you to have an edge over competitors with the best technologies and services to meet the ever-changing needs of the businesses.
        </p>
        <p>
          We offer a range of custom IT programming services with our outstanding experience in database development for desktop and distributed application design.
        </p>
        <br></br>
        <h2 className="section-heading">Interactive Web Development</h2>
        <p>
          Our web and ecommerce engineers can develop anything from a basic ecommerce website to complex web portals, web applications, and content management systems. Using well-defined standards and frameworks, our engineers deliver flexible, robust, and secure solutions.
        </p>
        <p>
          We help clients reach out to millions through the power of search engines. We offer organic search engine optimization services and get our clients to the top page of Google for their niche. Our defined and set organic approach starts showing results in a couple of weeks and lets you track your progress way up to the top.
        </p>
      </div>
    </div>
  );
};

const SolutionsForPage = () => {
  return (

    <div className="solutions-container">
      <div className="center-container">
        <h1 className="about-us-heading">Solutions For</h1>
      </div>
      <br></br>
      <ul style={{ listStyleType: 'disc', marginLeft: '1.5em' }}>
        <li>
          <Typography variant="body1" paragraph className="solution">
            <strong>Online Warehousing and Transport Management:</strong> This online system was developed to give technology edge to the logistic and transport industry. It had various interlinked modules like receiving, loading memo, dispatch & shipping, hire payment contracts, rate master, delivery, billing, branch and consolidated accounting, brokerage and accounting, inventory, warehouse stock and vehicle management.
          </Typography>
        </li>

        <li>
          <Typography variant="body1" paragraph className="solution">
            <strong>Textile Cloth Processing System:</strong> Multi location customized software was developed for a leading textile company to automate their processing operation with integration to accounts and data consolidation at head office using ADSL connectivity.
          </Typography>
        </li>

        <li>
          <Typography variant="body1" paragraph className="solution">
            <strong>Garment Manufacturing Management:</strong> Customized software was developed for a leading Retail Company to automate their Import, Purchase, Sale, Export, Stock, Job Management and billing operation with integration to accounts.
          </Typography>
        </li>

        <li>
          <Typography variant="body1" paragraph className="solution">
            <strong>Housing Society Management:</strong> This online system was developed to give technology edge to the Housing Society. It had various interlinked modules like Member management, Lease, Lien, NOC, Billing & accounting management. All accounting data transfer to Tally ERP 9.
          </Typography>
        </li>

        <li>
          <Typography variant="body1" paragraph className="solution">
            <strong>Lease Management:</strong> This online system is developed to maintain Lease member, Building/Unit Billing & accounting. All accounting data transfer to Tally ERP 9.
          </Typography>
        </li>

        <li>
          <Typography variant="body1" paragraph className="solution">
            <strong>Warehouse Management:</strong> Customized software was developed for a leading Warehouse company to automate their Storage, Labour, Transport and Billing operation with integration to accounts.
          </Typography>
        </li>

        <li>
          <Typography variant="body1" paragraph className="solution">
            <strong>Car Hire Management:</strong> Our Car Hire Management system is the most complete software for managing your car rental business from local hire slips to fleet operation with big companies (call centers and big It companies). The program features are standard features such as contracts, log entry, advances to car owners for cash & fuel, invoice, sales report. Our system is robust enough to do billing based on contracts which can be one of the following viz. kilometer wise, hourly, passenger wise, route wise, trip wise, daily, weekly, monthly.
          </Typography>
        </li>

        
      </ul>

    </div>
  );
};
const ClientsPage = () => {
  const renderClient = (client, index) => (
    <Grid item xs={12} sm={6} md={6} lg={6} key={index} style={{ height: '100%' }}>
      <Card className='card-color' style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
          <Typography variant="h6" component="div" mb={1}>
            {client.link ? (
              <Link href={client.link} target="_blank" rel="noopener noreferrer">
                {client.name}
              </Link>
            ) : (
              client.name
            )}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  return (

    <div className="solutions-container">
      <div className="center-container">
        <h1 className="about-us-heading">Some of Our Esteemed Clients</h1>
      </div>
      <br></br>
      <div style={{ backgroundColor: '#FFF7F1', margin: 0 }}>
        <Grid container spacing={3}>
          {clientsData.map(renderClient)}
        </Grid>

        
      </div>
    </div>

  );
};

const TechnologyPage = () => {
  return (

    <div className="solutions-container">
      <div className="center-container">
        <h1 className="about-us-heading">Technology Used</h1>
      </div>

      <Grid container spacing={3}>
        {technologies.map((tech, index) => (
          <Grid item xs={12} sm={6} key={index}>
            {/* Set sm to 6 to display two cards in one row on larger screens */}
            <Card className="technology-card">
              <CardContent>
                <Typography variant="h6" component="div" className="category-heading" mb={2}>
                  {tech.category}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {tech.tools.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br></br>
      <Typography variant="body1" className="center-container">
        <b>We have mastered the logics in data movement between the branches without any additional cost in hardware setup.</b>
      </Typography>
    </div>

  );
};

const ContactUsPage = () => {
  return (
    <div className="solutions-container">
      <div className="center-container">
        <h1 className="about-us-heading">Contact Us</h1>
      </div>
      <div className="center-container">
        <Card className="contact-card">
          <CardContent>
            <h1 className='customTypography'>Core Infotech</h1>
            <br />
            <Typography variant="body1" mb={2}>
              iThink, B519, Palava, near Xperia Mall, Kalyan-shill Rd., Dombivali(E)-421204, Maharashtra INDIA.
            </Typography>
            <div className="center-container">
              <LocalPhoneIcon className="icon" />
              <Typography variant="body1" mb={2}>
                Mobile: +91 9594097974.
              </Typography>
            </div>
            <div className="center-container">
              <EmailIcon className="icon" />
              <Typography variant="body1">
                Email: sandeepbhor@coreinfotech.org.in
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
