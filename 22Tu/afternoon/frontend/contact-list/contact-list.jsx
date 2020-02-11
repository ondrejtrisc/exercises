import React from 'react';
import { Contact } from '../contact/contact.jsx';
import './contact-list.css';

export class ContactList extends React.Component {

  state = {
    contacts: [
      // {
      //   gender: 'male',
      //   name: 'ondrej trisc',
      //   number: '123-456-789'
      // },
      // {
      //   gender: 'female',
      //   name: 'jane doe',
      //   number: '987-654-321'
      // }
    ]
  }

  componentDidMount = () =>
    fetch('http://bootcamp.podlomar.org/api/contacts')
      .then(resp => resp.json())
      .then(json => this.setState({contacts: json}));

  render = () => {

    if (this.state.contacts.length === 0) {
      return <h1>waiting</h1>
    }

    return (
      <div className="contacts-list">
        {
          this.state.contacts.map(contact => {
            return (
              <Contact gender={contact.gender} name={contact.name} number={contact.number} />
            );
          })
        }
      </div>
    );
  }
}