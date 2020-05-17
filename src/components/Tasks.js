import React, { Component } from "react";
import List from "./List/List";
import Phonebook from "./Phonebook";

class Tasks extends Component {
  state = {
    contacts: [
      { id: "id-1", contact: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", contact: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", contact: "Eden Clements", number: "645-17-79" },
      { id: "id-4", contact: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  componentDidMount() {
    const local = localStorage.getItem("contacts");
    if (local !== null) {
      this.setState({ contacts: JSON.parse(local) });
    }
  }
  
  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  filterList = () => {
    if (this.state.filter)
      return this.state.contacts.filter((item) =>
        item.contact.toLowerCase().includes(this.state.filter)
      );

    return this.state.contacts;
  };

  FilterValue = (e) => {
    this.setState({ filter: e.target.value });
  };

  ContactInfo = (newContact) => {
    this.setState((prevstate) => ({
      contacts: [...prevstate.contacts, newContact],
    }));
  };
  deleteItem = (e) => {
    const id = e.target.id;
    this.setState((prevstate) => ({
      contacts: [...prevstate.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  render() {
    return (
      <>
        <Phonebook
          ContactInfo={this.ContactInfo}
          contacts={this.state.contacts}
        />
        <List
          contacts={this.state.contacts}
          filterList={this.filterList()}
          filter={this.state.filter}
          FilterValue={this.FilterValue}
          deleteItem={this.deleteItem}
        />
      </>
    );
  }
}

export default Tasks;
