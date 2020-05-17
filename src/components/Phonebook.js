import React, { Component } from "react";
import { InputForm } from "./InputForm/InputForm";
import { BtnFormSubmit } from "./Button/BtnFormSubmit";
import { v4 as uuidv4 } from "uuid";

class Phonebook extends Component {
  state = {
    contact: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  FindContact = (contact) => {
    const allContacts = this.props.contacts;
    const include = allContacts.filter((item) =>
      item.contact.toLowerCase().includes(contact.toLowerCase())
    );

    return include.length !== 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = this.state.contact;
    const number = this.state.number;
    if (contact && number) {
      if (this.FindContact(contact)) {
        return alert("=(");
      } else {
        const newContact = { id: uuidv4(), contact, number };
        this.props.ContactInfo(newContact);
        this.setState({ contact: "", number: "" });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputForm
          contact={this.state.contact}
          number={this.state.number}
          handleChange={this.handleChange}
        />
        <BtnFormSubmit />
      </form>
    );
  }
}

export default Phonebook;
