import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Link } from '@mui/material';

const clientsData = [
  { name: 'DETCO Textiles Pvt Ltd', link: 'https://detcogroup.com/index.html' },
  { name: 'Remco Silk Mills Private Limited' },
  { name: 'Ujagar Prints & processor Private Limited' },
  { name: 'SUPERSHUTTLE LOGISTICS PVT. LTD', link: 'https://www.supershuttle.co.in/index.html' },
  { name: 'Sri Srinivasa Roadlines', link: 'https://ssrlindia.com/cms.php?cat_id=1189' },
  { name: 'Udaipur Golden Transport Company' },
  { name: 'Dupen Laboratories Pvt. Ltd.' },
];

const businessPartnersData = [
  { name: 'Arohi Operations Pvt. Ltd', link: 'http://www.arohioperations.com' },
];

const ClientsPage = () => {
    const renderClient = (client, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} style={{ height: '100%' }}>
          <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography variant="h6" component="div" mb={1} style={{ textAlign: 'center' }}>
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
    <Container>
      <Typography variant="h4" component="h1" mt={4} mb={2}>
        Some of Our Esteemed Clients
      </Typography>

      <Grid container spacing={3}>
        {clientsData.map(renderClient)}
      </Grid>

      <Typography variant="h4" component="h1" mt={4} mb={2}>
        Business Partners
      </Typography>

      <Grid container spacing={3}>
        {businessPartnersData.map(renderClient)}
      </Grid>
    </Container>
  );
};

export default ClientsPage;
