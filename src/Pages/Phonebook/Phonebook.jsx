import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Contacts from '../../components/Contacts/Contacts';
import Filter from '../../components/Filter/Filter';

import styles from './Phonebook.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operation';
import Loader from '../../components/Loader/Loader';

const Phonebook = () => {
    const contacts = useSelector(selectContacts)
    const error = useSelector(selectError)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={styles.wrapperContent}>
        <ContactForm />
        {contacts.length > 0 ? (
    <>
        <Contacts />
        <Filter />
    </>
    ) : (
        <p>The contact list is empty</p>
    )}
    {isLoading && !error && <Loader />}
    </div>
    );
};

export default Phonebook;