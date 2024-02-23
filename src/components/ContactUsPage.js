import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';



const ContactUsPage = () => {
  return (
    <Container className='contact-us-container'>
      <Typography variant="h4" component="h1" mt={4} mb={2}>
        Contact Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card className="contact-card">
            <CardContent>
              <MapIcon className='icon'/>
              <Typography variant="body1" mt={1}>
                Core Infotech.
                <br />
                H-406, Suprema, Casabella, Palava, near Xperia Mall, Kalyan-shill Rd., Dombivali(E)-421204, Maharashtra INDIA.
              </Typography>
              <div className="contact-info">
                <LocalPhoneIcon className="icon" />
                <Typography variant="body1" mt={2}>
                  Mobile: +91 9594097974.
                </Typography>
              </div>
              <div className="contact-info">
                <EmailIcon className="icon" />
                <Typography variant="body1">
                  Email: sandeepbhor@coreinfotech.org.in
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUsPage;
