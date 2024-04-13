import React from 'react';
import { TripPlan, Welcome } from '../../components';
import { Wrapper } from '../../global_styles/styles';

const Main: React.FC = () => {
  return (
    <Wrapper height="100vh">
      <Welcome />


      <TripPlan/>
    </Wrapper>
  );
};

export default Main;
