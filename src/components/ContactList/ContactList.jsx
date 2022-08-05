import React from "react";
import {Item, List} from "components/ContactList/ContactList.styled";



const ContactList = ({ contacts, onDelete }) => {
    return (
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={()=>onDelete(contact.id)}>Delete</button>
          </Item>
        ))}
      </List>
    );
};

export default ContactList;