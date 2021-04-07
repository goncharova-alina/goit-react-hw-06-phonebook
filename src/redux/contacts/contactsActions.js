import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/addContact", (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const removeContact = createAction("contacts/removeContact", (contactId) => ({
  payload: { contactId },
}));

const changeFilter = createAction("contacts/changeFilter", (filter) => ({
  payload: { filter },
}));

export default {
  addContact,
  removeContact,
  changeFilter,
};
