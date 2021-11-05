import { library } from "@fortawesome/fontawesome-svg-core";
import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
    props;

  return (
    <ul className="list-group m-5">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? "list-group-item active clickable"
              : "list-group-item clickable"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
  console.log(this);
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
