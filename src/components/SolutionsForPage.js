import React from 'react';
import { Container, Typography } from '@mui/material';

const SolutionsForPage = () => {
  return (

    <Container className="solutions-container">
      <Typography variant="h4" component="h1" className="title" >
        Solutions For
      </Typography>
      <br></br>

      <Typography variant="body1" paragraph className="solution">
        <strong>Online Warehousing and Transport Management:</strong> This online system was developed to give technology edge to the logistic and transport industry. It had various interlinked modules like receiving, loading memo, dispatch & shipping, hire payment contracts, rate master, delivery, billing, branch and consolidated accounting, brokerage and accounting, inventory, warehouse stock and vehicle management.
      </Typography>

      <Typography variant="body1" paragraph className="solution">
        <strong>Textile Cloth Processing System:</strong> Multi location customized software was developed for a leading textile company to automate their processing operation with integration to accounts and data consolidation at head office using ADSL connectivity.
      </Typography>

      <Typography variant="body1" paragraph className="solution">
        <strong>Garment Manufacturing Management:</strong> Customized software was developed for a leading Retail Company to automate their Import, Purchase, Sale, Export, Stock, Job Management and billing operation with integration to accounts.
      </Typography>

      <Typography variant="body1" paragraph className="solution">
        <strong>Housing Society Management:</strong> This online system was developed to give technology edge to the Housing Society. It had various interlinked modules like Member management, Lease, Lien, NOC, Billing & accounting management. All accounting data transfer to Tally ERP 9.
      </Typography>

      <Typography variant="body1" paragraph className="solution">
        <strong>Lease Management:</strong> This online system is developed to maintain Lease member, Building/Unit Billing & accounting. All accounting data transfer to Tally ERP 9.
      </Typography>

      <Typography variant="body1" paragraph className="solution">
        <strong>Warehouse Management:</strong> Customized software was developed for a leading Warehouse company to automate their Storage, Labour, Transport and Billing operation with integration to accounts.
      </Typography>

      <Typography variant="body1" paragraph className="solution">
        <strong>Car Hire Management:</strong> Our Car Hire Management system is the most complete software for managing your car rental business from local hire slips to fleet operation with big companies (call centers and big It companies). The program features are standard features such as contracts, log entry, advances to car owners for cash & fuel, invoice, sales report. Our system is robust enough to do billing based on contracts which can be one of the following viz. kilometer wise, hourly, passenger wise, route wise, trip wise, daily, weekly, monthly.
      </Typography>

      <Typography variant="body1" paragraph className="solution">
        <strong>ANPR: Automatic number plate recognition (ANPR):</strong>(ANPR) is a surveillance system that allows users to track, identify and monitor moving vehicles. License plates of vehicles passing by are scanned and saved by mounted cameras. Our ANPR system is simple to install and operate.
        RLVD: Red Light Violation Detection (RLVD) helps identify vehicles that violate traffic regulations by running a red light. Our RLVD solution is easy and quick to install as it does not require any integration with the traffic light system nor uses any sensors. 
        Speed Detection: To reduce incidences of rash driving and improve road safety we have designed a Speed Detection solution that can accurately identify vehicles going over the prescribed speed limit for that road / highway.
        ICCC: Is alert system detecting incidents and alerts to the system head office using cctvs. This system is connected with ANPR for stolen vehicles.
      </Typography>


    </Container>
  );
};

export default SolutionsForPage;
