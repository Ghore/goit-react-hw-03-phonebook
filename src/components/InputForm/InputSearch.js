import React from "react";

function InputSearch({ FilterValue, filter }) {
  return (
    <>
      <h5>Find contacts by name</h5>
      <input
        name="filter"
        placeholder="search contact"
        type="text"
        onChange={FilterValue}
        value={filter}
      />
    </>
  );
}

export default InputSearch;
