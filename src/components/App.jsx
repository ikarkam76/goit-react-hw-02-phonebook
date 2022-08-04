import React, { Component } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleContactFormSubmit = values => {
    this.setState({contacts: [...this.state.contacts, values]})
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={this.handleContactFormSubmit} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
};

export default App ;

