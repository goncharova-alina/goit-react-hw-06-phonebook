import { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import "./ContactForm.css";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, number });

    this.resetForm();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if ((!name, !number)) {
      alert("Some filed is empty");
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <h3>Name</h3>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChangeForm}
          />
        </label>
        <br />
        <h3>Number</h3>
        <label>
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleChangeForm}
          />
        </label>
        <br />
        <button type="submit" className="buttonForm">
          Add contact
        </button>
      </form>
    );
  }
}

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

export default ContactForm;
