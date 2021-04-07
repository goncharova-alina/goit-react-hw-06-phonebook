import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ContactList.css";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="ContactsList">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={500} classNames="Contact-anime">
          <ContactListItem key={id} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return { contacts: filteredContacts };
};

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
