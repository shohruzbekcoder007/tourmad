import React from 'react';
import { Wrapper } from '../../global_styles/styles';
import { Outlet } from 'react-router';

const Main: React.FC = () => {
  return (
    <Wrapper height="100vh">
      <Outlet/>
    </Wrapper>
  );
};

export default Main;
