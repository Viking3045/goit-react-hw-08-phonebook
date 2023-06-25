import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { current } from 'redux/auth/auth-operations';
import LinearIndeterminate from 'services/LinearIndeterminate';
import { getIsLoading } from 'redux/contacts/contacts-selectors';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LinearIndeterminate />}
      {children}
    </>
  );
};

export default AuthLayout;
