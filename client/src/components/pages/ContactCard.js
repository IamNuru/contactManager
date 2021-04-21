import React, { useContext, useEffect } from 'react';
import ContactContext from '../context/ContactContext';
import { Link } from 'react-router-dom';
import '../../assets/contactcard.css';
import profile from '../../images/noimage.png';

const ContactCard = (props) => {
	const contact = props.contact;
	const contactContext = useContext(ContactContext);

	const { deleteContact } = contactContext;

	const handleDelete = (contact) => {
		if (window.confirm(`Are you sure of deleting ${contact.first_name}?`)) {
			deleteContact(contact.id);
		}
	};
	return (
		// arr1.map((one) => {
		<div className='flat-card p-2 m-1 d-flex'>
			<div className='card-left mr-1'>
				<img src={profile} alt='Profile' title='Image' />
			</div>
			<div className='card-right'>
				<div className='contact-name'>
					<Link to={`/contact/${contact.id}`}> {contact.first_name}</Link>
				</div>
				<div className='contact-occupation'>
					{contact.relationship === null ? '' : contact.relationship + ' '}{' '}
					{contact.mobile_1}
				</div>
				<div className='contact-actions d-flex  text-center'>
					<li>
						<Link to={`/edit/${contact.id}`} title='Edit'>
							<i className='fa fa-edit'></i>
						</Link>
					</li>
					<li>
						<i
							className='fa fa-trash'
							onClick={() => handleDelete(contact)}
						></i>
					</li>
				</div>
			</div>
		</div>
		// })
	);
};

export default ContactCard;
