import React, { useEffect, useState } from 'react';
import { contactAPI } from '../services/contactService';
import { IContact } from '../models/IContact';
import ContactItem from './ContactItem';

const ContactContainer: React.FC = () => {
    const [search, setSearch] = useState('');

    let {
        data: allContacts = [],
        error,
        isLoading: loading
    } = contactAPI.useFetchAllContactsQuery(50);

    const [contacts, setContacts] = useState(allContacts);

    const [deleteContact, { }] = contactAPI.useDeleteContactMutation()
    const [updateContact, { }] = contactAPI.useUpdateContactMutation()
    const [addContact, { }] = contactAPI.useAddContactMutation()

    console.log(contacts);
    console.log(search);

    const handleRemove = (contact: IContact) => {
        deleteContact(contact)
    }

    const handleUpdate = (contact: IContact) => {
        updateContact(contact)
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => { //NOT DONE YET!!! event: React.FormEvent<HTMLFormElement>
        event.preventDefault();
        setContacts(allContacts.filter((contact) => {
            return contact.name.toLowerCase().includes(search)
        }))
    }

    const handleClearSearch = () => {
        setSearch('');
        setContacts(allContacts);
    }

    const handleCreate = async () => {
        const name = prompt('Name')
        name !== null && await addContact({ name } as unknown as IContact)
    }

    if (loading) {
        <div >Идет загрузка контактов...</div>
    }

    if (error) {
        <div>Контакты не загрузились.</div>
    }

    return (
        <div>
            <button onClick={handleCreate}>Добавить контакт</button>
            <form onSubmit={handleSearch}>
                <label>Поиск</label>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}></input>
            </form>
            <button onClick={handleClearSearch}>Очистить поиск</button>
            {contacts && contacts.map(cont =>
                <ContactItem key={cont.id} contact={cont} remove={handleRemove} update={handleUpdate} />
            )}
        </div>
    )
}

export default ContactContainer;
