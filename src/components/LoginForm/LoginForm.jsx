import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: state.email,
        password: state.password,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          required
          value={state.email}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          required
          value={state.password}
          onChange={handleChange}
        />
      </label>

      <button className={css.button} type="submit">Log In</button>
    </form>
  );
};
