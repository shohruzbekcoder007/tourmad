import React, { useEffect } from 'react';
import { Wrapper } from '../../global_styles/styles';
import { Outlet, useNavigate } from 'react-router';

const Main: React.FC = () => {

  const navigate = useNavigate()

  useEffect(() => {
    // navigate("public")
  }, [])

  return (
    <Wrapper height="100vh">
      <Outlet/>
    </Wrapper>
  );
};

export default Main;
