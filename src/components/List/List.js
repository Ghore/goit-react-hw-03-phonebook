import React from "react";
import ListItem from "../ListItem/ListItem";
import InputSearch from "../InputForm/InputSearch";

const List = ({ contacts, filterList, filter, FilterValue, deleteItem }) => {
  return (
    <>
      {contacts.length >= 2 ? (
        <>
          <h3>Contacts</h3>
          <InputSearch filter={filter} FilterValue={FilterValue} />
        </>
      ) : (
        <></>
      )}
      <ul>
        {filterList.map((contact) => (
          <ListItem
            key={contact.id}
            deleteItem={deleteItem}
            contact={contact}
          />
        ))}
      </ul>
    </>
  );
};
export default List;
