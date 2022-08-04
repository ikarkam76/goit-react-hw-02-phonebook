import React, { Component } from "react";
import ContactForm from "components/ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleContactFormSubmit = values => {
    this.setState({contacts: [...this.state.contacts, values]})
    console.log(values);
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={this.handleContactFormSubmit} />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}:   {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default App ;

