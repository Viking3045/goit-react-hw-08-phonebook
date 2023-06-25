import { useSelector, useDispatch } from 'react-redux';
import css from './UserMenu.module.css'

import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { email } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
            <div>
        {email}
      </div>
      <button className={css.button}  onClick={onLogout}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;

