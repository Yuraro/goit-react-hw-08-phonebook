import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
        name,
        phone: number,
    };

    if (contacts.find((contact) => contact.name === name)) {
        Notify.warning('This contact already exists in your list');
        return;
    }

    dispatch(addContact(contact));

    setName('');
    setNumber('');
    };

    return (
    <>
    <h2 className={styles.title}>Phonebook</h2> 
    <form className={styles.form} onSubmit={handleSubmit}> 
        <input
        className={styles.input} 
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input
        className={styles.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        />
        <button className={styles.addButton} type="submit">Add Contact</button> 
    </form>
    </>
);
};

export default ContactForm;
