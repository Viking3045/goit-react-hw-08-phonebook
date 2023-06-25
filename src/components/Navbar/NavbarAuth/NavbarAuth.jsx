import { useNavigate } from 'react-router-dom';
import css from './navbar-auth.module.css'

const NavbarAuth = () => {
  const navigate = useNavigate();

  return (
    <>

           <button className={css.button}  onClick={() => navigate('/login')}>
        Login
      </button>
      <button className={css.button}  onClick={() => navigate('/register')}>
        register
      </button>
    </>
  );
};

export default NavbarAuth;
