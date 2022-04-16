import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IContact } from "../models/IContact";


export const contactAPI = createApi({
    reducerPath: 'contactAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Contact'],
    endpoints: (build) => ({
        fetchAllContacts: build.query<IContact[], number>({
            query: () => ({
                url: '/contacts'
            }),
            providesTags: result => ['Contact']
        }),
        deleteContact: build.mutation<IContact, IContact>({
            query: (contact) => ({
                url: `/contacts/${contact.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Contact']
        }),
        updateContact: build.mutation<IContact, IContact>({
            query: (contact) => ({
                url: `/contacts/${contact.id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: ['Contact']
        }),
        addContact: build.mutation<IContact, IContact>({
            query: (contact) => ({
                url: `/contacts`,
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['Contact']
        }),
        searchContact: build.query<IContact, string>({
            query: (q) => ({
                url: `/contacts?q=${q}`,
                method: 'GET'
            }),
            providesTags: result => ['Contact']
        })
    })
})
