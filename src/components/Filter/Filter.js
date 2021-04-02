import React from "react";
import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({ filter, onChange }) => {
  return (
    <div className="Filter">
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter name for Search"
      />
    </div>
  );
};

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
