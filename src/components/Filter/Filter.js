import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Filter.css";
import contactsActions from "../../redux/contacts/contactsActions";

const Filter = ({ value, onChangeFilter }) => (
  <div className="Filter">
    <p>Find contacts by name</p>
    <input type="text" value={value} onChange={onChangeFilter} />
  </div>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
