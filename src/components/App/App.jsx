import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import s from './App.module.css'

const App = () => {

  return (
    <div className={s.container}>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
