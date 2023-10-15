import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  const [draft, setDraft] = useState({});
  function handleChange(e) {
    const newDraft = {...draft};
    newDraft[to.id] = e.target.value;
    setDraft(newDraft);
  }
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => {
          setDraft({...draft, [to.id]: draft[to.id] || ''});
          setTo(contact);
        }
      }
      />
      <Chat key={to.id} contact={to} content={draft[to.id] || ''} onChange={handleChange} />
    </div>
  )
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
