import React, { Fragment, useEffect, useContext } from 'react';
import ContactContext from '../context/ContactContext';
import FilterContacts from '../FilterContacts';
import ContactCard from './ContactCard';
import '../../assets/contactlist.css';

const ContactList = () => {
	const contactContext = useContext(ContactContext);
	const { getContacts, contacts, filtered } = contactContext;
	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0) {
		return <h4>Add Contacts</h4>;
	}
	return (
		<Fragment>
			<div className='page-header  mb-2'>
				<div className='page-header-title'>Contacts</div>
				<div className='line'></div>
				<div className='line'></div>
			</div>
			<FilterContacts />
			<div className='wrap-contacts'>
				{filtered !== null
					? filtered.map((contact, index) => (
							<ContactCard key={index} contact={contact} />
					  ))
					: contacts.map((contact, index) => (
							<ContactCard key={index} contact={contact} />
					  ))}
			</div>
		</Fragment>
	);
};

export default ContactList;
