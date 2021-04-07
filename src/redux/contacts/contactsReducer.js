import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import contactsActions from "./contactsActions";

const INITIAL_CONTACTS = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const items = createReducer([...INITIAL_CONTACTS], {
  [contactsActions.addContact]: (state, action) => [
    ...state,
    action.payload.contact,
  ],
  [contactsActions.removeContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload.contactId),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload.filter,
});

export default combineReducers({
  items,
  filter,
});
