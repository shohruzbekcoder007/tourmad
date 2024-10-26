import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setStorage, setStorageR } from '../../utils/storage';

function LoginGoogle() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const accessToken = queryParams.get("access_token");
  const refreshToken = queryParams.get("refresh_token");

  useEffect(() => {
    if (accessToken && refreshToken) {
      setStorage(accessToken);
      setStorageR(refreshToken);
      navigate('/'); // navigate to the main page after tokens are set
    }
  }, [accessToken, refreshToken, navigate]); // triggers when tokens or navigate change

  return <div>Loading...</div>; // can show a loading message if needed
}

export default LoginGoogle;
