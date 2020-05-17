import React from "react";

const ListItem = ({ contact: { contact, number, id }, deleteItem }) => {
  return (
    <li>
      <p>
        {contact}: {number}
      </p>
      <button id={id} onClick={deleteItem}>
        delete
      </button>
    </li>
  );
};

export default ListItem;
