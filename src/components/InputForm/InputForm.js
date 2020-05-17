import React from "react";

export function InputForm({ handleChange, contact, number }) {
  return (
    <>
      <h2>Name</h2>
      <input
        name="contact"
        placeholder="Enter your name"
        onChange={handleChange}
        value={contact}
        type="text"
      />
      <h3>Number</h3>
      <input
        name="number"
        placeholder="+38(0__)___-___-__"
        onChange={handleChange}
        value={number}
        type="number"
      />
    </>
  );
}
