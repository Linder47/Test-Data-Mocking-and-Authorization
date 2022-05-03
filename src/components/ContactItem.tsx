import React, { FC } from "react";
import { IContact } from "../models/IContact";

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
        <div className="contact" onClick={handleUpdate}>
            <p>{contact.id} Name: {contact.name}</p>

            <button onClick={handleRemove} >DELETE {contact.name}</button>
            <p></p>
            <p></p>
        </div>
    )
}

export default ContactItem;