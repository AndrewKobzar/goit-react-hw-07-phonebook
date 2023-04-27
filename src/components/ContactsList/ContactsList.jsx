import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectFilter,
} from 'components/Redux/selectors';
import {
  deleteContact,
  fetchContacts,
} from 'components/Redux/contacts/operations';
import s from './ContactsList.module.css'
const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContacts = id => dispatch(deleteContact(id));

  const filtered = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <div>
      {filtered?.length > 0 && (
        <ul className={s.contactList}>
          {filtered.map(({ id, name, phone }) => (
            <li className={s.item} key={id}>
              <p className={s.text}>{name}</p>
              <p className={s.text}>{phone}</p>
              <button
                className={s.btn}
                type="button"
                onClick={() => deleteContacts(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;

