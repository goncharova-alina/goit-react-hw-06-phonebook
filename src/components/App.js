import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    const { contacts: nowContacts } = this.state;
    const { contacts: prevContacts } = prevState;
    if (nowContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nowContacts));
    }
  }

  handleAddContact = (newContact) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleCheckUniqueContact = (name) => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find((contact) => contact.name === name);
    isExistContact && alert(`${isExistContact.name} is already in contacts!`);
    return !isExistContact;
  };

  handleRemoveContact = (id) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  handleChangeFilter = (filter) => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <div className="Container">
          <section title="Phonebook" className="Section">
            <h1>Phonebook</h1>
            <ContactForm
              contacts={contacts}
              onAdd={this.handleAddContact}
              onCheckUnique={this.handleCheckUniqueContact}
            />
          </section>
          <section title="Contacts" className="Section">
            <h2>Contacts</h2>
            <Filter filter={filter} onChange={this.handleChangeFilter} />
            <ContactList
              contacts={visibleContacts}
              onRemove={this.handleRemoveContact}
            />
          </section>
        </div>
      </>
    );
  }
}

export default App;
