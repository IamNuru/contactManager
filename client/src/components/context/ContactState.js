import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './ContactContext';
import contactReducer from './contactReducer';
import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	GET_CONTACT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CONTACT_ERROR,
	CLEAR_FILTER,
} from './types';

const ContactState = (props) => {
	const initialState = {
		contacts: [],
		contact: {},
		error: null,
		filtered: null,
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// get contacts
	const getContacts = async () => {
		try {
			const res = await axios.get('http://127.0.0.1:8000/api/mycontacts');
			dispatch({
				type: GET_CONTACTS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: CONTACT_ERROR,
				payload: error.response.errors,
			});
		}
	};

	// Add contact
	const addContact = async (contact) => {
		try {
			const res = await axios.post(
				'http://127.0.0.1:8000/api/store/contact',
				contact
			);
			dispatch({
				type: ADD_CONTACT,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: CONTACT_ERROR,
				payload: error.response.errors,
			});
		}
	};
	// update contact
	const updateContact = async (contact, id) => {
		try {
			const res = await axios.post(
				`http://127.0.0.1:8000/api/update/contact/${id}`,
				contact
			);
			dispatch({
				type: UPDATE_CONTACT,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: CONTACT_ERROR,
				payload: error.response.errors,
			});
		}
	};
	// get Contact
	const getContact = async (id) => {
		try {
			const res = await axios.get(`http://127.0.0.1:8000/api/contact/${id}`);
			dispatch({
				type: GET_CONTACT,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: CONTACT_ERROR,
				payload: error.response.errors,
			});
		}
	};

	// Delete Contact
	const deleteContact = async (id) => {
		try {
			await axios.delete(`http://127.0.0.1:8000/api/destroy/contact/${id}`);
			dispatch({
				type: DELETE_CONTACT,
				payload: id,
			});
		} catch (error) {
			dispatch({
				type: CONTACT_ERROR,
				payload: error.response.errors,
			});
		}
	};

	// Update Contact
	// const updateContact = (contact) => {
	// 	dispatch({ type: UPDATE_CONTACT, payload: contact });
	// };

	// Filter Contacts
	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	// clear filter
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				filtered: state.filtered,
				error: state.error,
				contact: state.contact,
				getContacts,
				getContact,
				addContact,
				updateContact,
				deleteContact,
				filterContacts,
				clearFilter,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
