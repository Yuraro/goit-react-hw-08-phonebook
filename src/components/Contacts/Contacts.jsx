import React from 'react';
import css from './Contacts.module.css';
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
    <h2 className={css.title}>Contacts</h2> 
    <ul className={css.contactsList}>
        {visibleContacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
            <p>
            {contact.name}: {contact.number}
            </p>
            <button className={css.deleteBtn} onClick={() => handleDelete(contact.id)} type="button">
            Delete
            </button>
        </li>
        ))}
    </ul>
    </>
    );
};

export default Contacts;
