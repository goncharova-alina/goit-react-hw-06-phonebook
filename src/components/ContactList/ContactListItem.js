import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import contactsActions from "../../redux/contacts/contactsActions";

const ContactListItem = ({ name, number, onClickRemove }) => {
  return (
    <li className="ContactListItem">
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className="ContactsList-button"
        onClick={onClickRemove}
      >
        Delete
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { items } = state.contacts;
  const contact = items.find((item) => item.id === ownProps.id);
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickRemove: () => dispatch(contactsActions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

ContactListItem.defaultProps = {
  name: "",
  number: "",
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};
