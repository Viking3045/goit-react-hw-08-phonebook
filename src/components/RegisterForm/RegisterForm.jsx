import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { signup } from 'redux/auth/auth-operations';
import css from './RegisterForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
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
      signup({
        name: state.name,
        email: state.email,
        password: state.password,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          type="text"
          name="name"
          required
          value={state.name}
          onChange={handleChange}
        />
      </label>
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
      <button className={css.button} type="submit" >
        Register
      </button>
    </form>
  );
};
