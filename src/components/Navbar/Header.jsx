import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './navbar.module.css'

import { isUserLogin } from 'redux/auth/auth-selectors';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';


function Header() {
  const isLogin = useSelector(isUserLogin);
  const navigate = useNavigate();

  return (
    <>
          <div >
        <div>
          <button className={css.button}
            onClick={() => navigate('/contacts')}
          >
            PHONEBOOK
          </button>
          {!isLogin && <NavbarAuth />}
          {isLogin && <UserMenu />}
        </div>
      </div>
    </>
  );
}

export default Header;
