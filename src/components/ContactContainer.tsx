import React, { useEffect, useState } from 'react';
import { contactAPI } from '../services/contactService';
import { IContact } from '../models/IContact';
import ContactItem from './ContactItem';

const ContactContainer: React.FC = () => {
    const [search, setSearch] = useState('');

    let {
        data: contacts = [],
        error,
        isLoading: loading
    } = contactAPI.useFetchAllContactsQuery(50);


    // let {
    //     data,
    //     error,
    //     isLoading
    // } = contactAPI.useSearchContactQuery(search);

    const [deleteContact, { }] = contactAPI.useDeleteContactMutation()
    const [updateContact, { }] = contactAPI.useUpdateContactMutation()
    const [addContact, { }] = contactAPI.useAddContactMutation()

    // const [searchContact, { }] = contactAPI.useSearchContactMutation()

    // let {
    //     data: contacts,
    //     isLoading,
    //     error
    // } = contactAPI.useSearchContactQuery(search);


    console.log(contacts);
    console.log(search);

    if (loading) {
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

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => { //NOT DONE YET!!!
    // 
        event.preventDefault();
    //     console.log(search);
    //     console.log(contacts);
    //     // searchContact(search);
    }

    const handleCreate = async () => {
        const name = prompt('Name')
        await addContact({ name } as unknown as IContact)
    }

    return (
        <div>
            <button onClick={handleCreate}>Добавить контакт</button>
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