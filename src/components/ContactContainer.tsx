import React, { useEffect, useState } from 'react';
import { contactAPI } from '../services/contactService';
import { IContact } from '../models/IContact';
import ContactItem from './ContactItem';

const ContactContainer: React.FC = () => {
    const {
        data: contacts,
        isLoading,
        error
    } = contactAPI.useFetchAllContactsQuery(10)

    const [search, setSearch] = useState('');

    const [deleteContact, { }] = contactAPI.useDeleteContactMutation()
    const [updateContact, { }] = contactAPI.useUpdateContactMutation()
    const [addContact, { }] = contactAPI.useAddContactMutation()
    // const [searchContact, {}] = contactAPI.useSearchContactMutation()
    console.log(contacts);
    console.log(search);

    if (isLoading) {
        <div >Идет загрузка контактов...</div>
    }

    if (error) {
        <div>Контакты не загрузились.</div>
    }

    const handleRemove = (contact: IContact) => {
        console.log(contact)
        deleteContact(contact)
    }

    const handleUpdate = (contact: IContact) => {
        console.log(contact)
        updateContact(contact)
    }

    const handleSearch = () => {
        searchContact(search)
    }

    // const handleCreate = async () => {
    //     const name = prompt()
    //     await addContact({name, body: name} as IContact)
    // }

    return (
        <div>
            {/* <button onClick={handleCreate}>Добавить контакт</button> */}
            <form onSubmit={handleSearch}>
                <label>Поиск</label>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </form>
            {contacts && contacts.map(cont =>
                <ContactItem key={cont.id} contact={cont} remove={handleRemove} update={handleUpdate} />
            )}
        </div>

    )
}

export default ContactContainer;