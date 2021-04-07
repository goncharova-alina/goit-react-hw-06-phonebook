import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ContactForm.css";
import contactsActions from "../../redux/contacts/contactsActions";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChange = (type, e) => {
    const { contacts } = this.props;
    if (type === "name") {
      const contactInState = contacts.find(
        (contact) => contact.name.toLowerCase() === e.target.value.toLowerCase()
      );
      if (contactInState) {
        this.setState({ alert: true });
      }
    }
    this.setState({ [type]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAddContact, contacts } = this.props;
    const contactInState = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    contactInState && this.setState({ alert: true });
    if (!contactInState && name && number) {
      onAddContact(name, number);
      this.setState(INITIAL_STATE);
      return;
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <label>
            <input
              type="text"
              value={name}
              onChange={(e) => this.handleChange("name", e)}
            />
          </label>
          <br />
          <h3>Number</h3>
          <label>
            <input
              type="tel"
              value={number}
              onChange={(e) => this.handleChange("number", e)}
            />
          </label>
          <br />
          <button type="submit" className="buttonForm">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  onAddContact: contactsActions.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onAddContact: PropTypes.func.isRequired,
};
