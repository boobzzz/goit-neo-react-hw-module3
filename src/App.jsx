import contactList from './contacts.json';
import { useState } from 'react';
import ContactForm from './components/ContactForm.jsx';
import SearchBox from './components/SearchBox.jsx';
import ContactList from './components/ContactList.jsx';
import './App.css';

function App() {
    const [contacts, setContacts] = useState(contactList);
    const [filter, setFilter] = useState('');

    const addContact = (newContact) => {
        newContact.id = `id-${contacts.length + 1}`;
        setContacts([...contacts, newContact]);
    };

    const removeContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            <SearchBox
                value={filter}
                onFilter={setFilter}
            />
            <ContactList
                list={filteredContacts}
                removeContact={removeContact}
            />
        </>
    );
}

export default App;
