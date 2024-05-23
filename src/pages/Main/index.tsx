import React, { useEffect } from 'react';
import { Wrapper } from '../../global_styles/styles';
import { Outlet } from 'react-router';
import { getRequest } from '../../utils/request';
import { me } from '../../utils/API_urls';
import { useAppSelector } from '../../redux/hooks';
import { getStudentsList } from '../../redux/slices/langSlice';

const Main: React.FC = () => {

  const lang = useAppSelector(getStudentsList)

  useEffect(() => {
    getRequest(me).then(response => {
      console.log(lang, "<-lang")
      console.log(response.data, "<--response.data")
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
