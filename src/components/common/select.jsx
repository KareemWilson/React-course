import React, { Component } from "react";

const Select = ({ label, defaultText, array, name, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>

      <select
        className="form-select form-control"
        aria-label="Default select example"
        name={name}
        {...rest}
      >
        <option value="">{defaultText}</option>
        {array.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
