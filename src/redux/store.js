import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterReducer';
import { contactsReducer } from './contactListReducer';

export const store = configureStore({
  reducer: {
    contactList: contactsReducer,
    filter: filterReducer,
  },
});
