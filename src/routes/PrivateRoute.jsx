import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { IsLoginContext } from '../context/IsLoginContext';
const PrivateRoute = () => {
  const { isLogin } = useContext(IsLoginContext);
  if (!isLogin) {
    alert('로그인이 필요한 서비스입니다.');
  }
  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
