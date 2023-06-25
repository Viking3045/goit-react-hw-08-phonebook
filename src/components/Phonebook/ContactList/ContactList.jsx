import { useSelector, useDispatch } from 'react-redux';


import { deleteContact } from 'redux/contacts/operations';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import css from 'components/Phonebook/phonebook.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = idForDelete => {
    dispatch(deleteContact(idForDelete));
  };

  return (
    <>
      <div>
        Contacts
      </div>

      <div
      >
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li className={css.list} key={id} >
              <p >
                {name} {number}
              </p>
              <button
                className={css.button}
                type="button"
              
                onClick={() => onDeleteContact(id)}
              >
                <div >Delete</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;