import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	GET_CONTACT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
} from './types';

export default (state, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
			};
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload],
			};
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: [
					state.contacts.map((contact) =>
						contact.id === action.payload.id ? contact.payload : contact
					),
				],
			};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload
				),
			};
		case GET_CONTACT:
			return {
				...state,
				contact: action.payload,
			};
		case FILTER_CONTACTS:
			return {
				...state,
				filtered: state.contacts.filter((contact) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return (
						contact.first_name.match(regex) || contact.mobile_1.match(regex)
					);
				}),
			};
		case CONTACT_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		default:
			return state;
	}
};
