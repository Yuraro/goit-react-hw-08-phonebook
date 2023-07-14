import React from 'react';
import styles from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operation';
import { selectContacts, selectFilter } from 'redux/selectors';

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
    };

    return (
    <>
    <h2 className={styles.title}>Contacts</h2> 
    <ul className={styles.contactsList}>
        {visibleContacts.map((contact) => (
        <li className={styles.listItem} key={contact.id}>
            <p>
            {contact.name}: {contact.phone}
            </p>
            <button className={styles.deleteBtn} onClick={() => handleDelete(contact.id)} type="button">
            Delete
            </button>
        </li>
        ))}
    </ul>
    </>
    );
};

export default Contacts;
