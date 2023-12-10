import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BtnDelete, List, Name } from './ContactList.styled';

import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContactsByName = () => {
    const ff = filter.toLowerCase() ?? '';
    return contacts.filter(contact => contact.name.toLowerCase().includes(ff));
  };

  const filteredContacts = filterContactsByName();

  return (
    <ul>
      {filteredContacts.map(item => (
        <List key={item.id}>
          <Name>
            {item.name}: <span>{item.number}</span>
          </Name>
          <BtnDelete onClick={() => dispatch(deleteContact(item.id))}>
            Delete
          </BtnDelete>
        </List>
      ))}
    </ul>
  );
};
