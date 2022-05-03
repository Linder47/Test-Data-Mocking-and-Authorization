import React, { useEffect, useState } from 'react';
import { contactAPI } from '../services/contactService';
import { IContact } from '../models/IContact';
import ContactItem from './ContactItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Style.css';

const ContactContainer: React.FC = () => {
    let {
        data: contacts = [],
        error,
        isLoading: loading
    } = contactAPI.useFetchAllContactsQuery(50);

    const [deleteContact, { }] = contactAPI.useDeleteContactMutation()
    const [updateContact, { }] = contactAPI.useUpdateContactMutation()
    const [addContact, { }] = contactAPI.useAddContactMutation()

    const handleRemove = (contact: IContact) => {
        deleteContact(contact)
    }

    const handleUpdate = (contact: IContact) => {
        contact.name.length !== 0 && updateContact(contact)
    }

    const handleCreate = async () => {
        const name = prompt('Name')
        name !== null && await addContact({ name } as unknown as IContact)
    }

    if (loading) {
        <div >Loading contacts...</div>
    }

    if (error) {
        <div>Sorry, we couldn't load your contact list :C</div>
    }

    return (
        <div>
            <div className='contacts--filter'>
                <div className='contacts--filter__create'> <Button onClick={handleCreate}>Add a contact</Button></div>
            <p><i>Click on to the contact to update it.</i></p>
            </div>

            <div className='contacts--container'>
            <ListGroup>
                {contacts && contacts.map(cont =>
                    <ContactItem key={cont.id} contact={cont} remove={handleRemove} update={handleUpdate} />
                )}
                </ListGroup>
            </div>
        </div>
    )
}

export default ContactContainer;
