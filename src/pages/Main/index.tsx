import React, { useEffect } from 'react';
import { Wrapper } from '../../global_styles/styles';
import { Outlet } from 'react-router';
import { getRequest } from '../../utils/request';
import { me } from '../../utils/API_urls';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../redux/action/userActions';

const Main: React.FC = () => {

  // const dispatch = useDispatch()

  useEffect(() => {
    getRequest(me).then(response => {
      console.log(response.data, "<--response.data")
      // dispatch(setUser(response.data))
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <Wrapper height="100vh">
      <Outlet/>
    </Wrapper>
  );
};

export default Main;
