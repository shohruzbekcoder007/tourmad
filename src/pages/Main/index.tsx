import React from 'react';
import { Welcome } from '../../components';
import { Wrapper } from '../../global_styles/styles';

const Main: React.FC = () => {
  return (
    <Wrapper height="100vh">
      <Welcome />
    </Wrapper>
  );
};

export default Main;
