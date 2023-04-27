import { useDispatch } from 'react-redux';
import { onFilter } from 'components/Redux/contacts/contactsSlice';
import s from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();

  const filteredContacts = e => {
    dispatch(onFilter(e.currentTarget.value.toLowerCase()));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <p className={s.text}>Find contacts by name</p>
      <label className={s.label}>
        <input
          className={s.input}
          onChange={filteredContacts}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
    </div>
  );
};

export default Filter;
