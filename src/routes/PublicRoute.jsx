import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { IsLoginContext } from '../context/IsLoginContext';

const PublicRoute = () => {
  const { isLogin } = useContext(IsLoginContext);
  return isLogin ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
