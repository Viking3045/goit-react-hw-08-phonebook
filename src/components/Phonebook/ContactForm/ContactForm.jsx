import { useState } from 'react';


import css from 'components/Phonebook/ContactForm/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import { getAllContacts } from 'redux/contacts/contacts-selectors';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const AllContacts = useSelector(getAllContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const data = state;

    const normalizedName = data.name.toLowerCase();
    const isRepeatedContact = AllContacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (isRepeatedContact) {
      const alertString = data.name + ' is already in contacts.';
      alert(alertString);
      return;
    }
    dispatch(addContact({ ...data }));
    setState(INITIAL_STATE);
  };

  return (
    <>
      <div>
        Phonebook
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={state.number}
            onChange={handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    
    </>
  );
};

export default ContactForm;
