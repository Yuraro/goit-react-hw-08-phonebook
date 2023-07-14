import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import React from 'react';
import Filter from './Filter/Filter';
import styles from './Loader/Loader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import Loader from './Loader/Loader';

export const App = () => {
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
