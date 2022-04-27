import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IContact } from "../models/IContact";


export const contactAPI = createApi({
    reducerPath: 'contactAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Contacts', 'SearchedContact'],
    endpoints: (build) => ({
        fetchAllContacts: build.query<IContact[], number>({
            query: () => ({
                url: '/contacts'
            }),
            providesTags: result => ['Contacts']
        }),
        deleteContact: build.mutation<IContact, IContact>({
            query: (contact) => ({
                url: `/contacts/${contact.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Contacts']
        }),
        updateContact: build.mutation<IContact, IContact>({
            query: (contact) => ({
                url: `/contacts/${contact.id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: ['Contacts']
        }),
        addContact: build.mutation<IContact, IContact>({
            query: (contact) => ({
                url: `/contacts`,
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['Contacts']
        }),
        // searchContact: build.mutation<IContact, string>({
        //     query: (q) => ({
        //         url: `/contacts?name=${q}`,
        //         method: 'GET'
        //     }),
        //     // invalidatesTags: result => ['Contact']
        // // })
        searchContact: build.query<IContact, string>({
            query: (q) => ({
                url: `/contacts?name=${q}`
            }),
            
             providesTags: result => ['Contacts']
       })
    })
})
