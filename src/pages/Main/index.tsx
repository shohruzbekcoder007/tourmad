import React from 'react';
import { TicketTable, TripPlan, Welcome, ShowService, Footer } from '../../components';
import { Wrapper } from '../../global_styles/styles';

const Main: React.FC = () => {
  return (
    <Wrapper height="100vh">
      <Welcome />
      <TicketTable/>

      <TripPlan/>
      <ShowService />

      <Footer />
    </Wrapper>
  );
};

export default Main;
