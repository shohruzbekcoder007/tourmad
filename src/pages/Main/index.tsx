import React, { useEffect } from 'react';
import { Wrapper } from '../../global_styles/styles';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { getUser, getUserStatus, getUserToken } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/hooks';

const Main: React.FC = () => {

  const dispatch = useAppDispatch()
  const token = useSelector(getUserToken)
  const userStatus = useSelector(getUserStatus)

  useEffect(() => {
    if(token){
      if (userStatus === 'idle') {
        dispatch(getUser())
      }
    }
	}, [token, userStatus, dispatch])

  return (
    <Wrapper height="100vh">
      <Outlet/>
    </Wrapper>
  );
};

export default Main;
