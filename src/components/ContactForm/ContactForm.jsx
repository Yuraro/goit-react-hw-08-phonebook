
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix';

const ContactForm = () => {

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
        name: e.target.name.value,
        number: e.target.number.value,
    };

    if (contacts.find(contact => contact.name === e.target.name.value)) {
        Notify.warning('This contact already exists in your list');
        e.currentTarget.reset();
        return;
    }

    dispatch(addContact(contact));

    e.currentTarget.reset();

    };

    return (
    <>
    <h2 className={css.title}>Phonebook</h2> 
    <form className={css.form} onSubmit={handleSubmit}> 
        <input
        className={css.input} 
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"

        />
        <input
        className={css.input}
        type="text"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"

        />
        <button className={css.addButton} type="submit">Add Contact</button> 
    </form>
    </>
);
};

export default ContactForm;
