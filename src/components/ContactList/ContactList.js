import React from "react";

import PropTypes from "prop-types";

import "./ContactList.css";

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className="ContactListItem">
      {name}: {number}
      <button
        type="button"
        className="ContactsList-button"
        onClick={() => onRemove(id)}
      >
        Delete
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className="ContactsList">
      {contacts.map((contact) => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
