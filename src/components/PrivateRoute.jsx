import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import LinearIndeterminate from 'services/LinearIndeterminate';

import { getAuth } from 'redux/auth/auth-selectors';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <LinearIndeterminate />;
  }

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
