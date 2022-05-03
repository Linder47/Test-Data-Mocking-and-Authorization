import React, { FC } from "react";
import { IContact } from "../models/IContact";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Style.css';

interface ContactItemProps {
    contact: IContact;
    remove: (contact: IContact) => void;
    update: (contact: IContact) => void
}

const ContactItem: FC<ContactItemProps> = ({ contact, remove, update }) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(contact);
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const name = prompt() || ""
        update({ ...contact, name })
    }

    return (
        <ListGroup.Item>
        <div className="contact container-fluid" onClick={handleUpdate}>
            <p>{contact.name}</p>

            <Button variant="light" onClick={handleRemove} >DELETE</Button>
            <p></p>
            <p></p>
        </div>
        </ListGroup.Item>
    )
}

export default ContactItem;