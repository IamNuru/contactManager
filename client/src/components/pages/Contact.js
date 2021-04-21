import React, { Fragment, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ContactContext from '../context/ContactContext';
import '../../assets/contact.css';
import profile from '../../images/noimage.png';

const Contact = (props) => {
	const contactContext = useContext(ContactContext);
	const { getContact, contact, deleteContact } = contactContext;
	const {
		id,
		first_name,
		last_name,
		mobile_1,
		mobile_2,
		mobile_3,
		// occupation,
		// relationship,
		// email,
		// address,
		// website,
		preferred_name,
	} = contact;

	useEffect(() => {
		getContact(props.match.params.id);
		// eslint-disable-next-line
	}, []);

	const handleDelete = (contact) => {
		if (window.confirm(`Are you sure of deleting ${contact.first_name}?`)) {
			deleteContact(contact.id);
			props.history.push('/contacts');
		}
	};

	return (
		<Fragment>
			<div className='page-header  mb-2'>
				<div className='page-header-title'>Contacts</div>
				<div className='line'></div>
				<div className='line'></div>
			</div>
			<div className='wrap-contact-details'>
				<div className='card'>
					<img
						src={profile}
						alt='John'
						className='bg-grey'
						style={{ width: '100%' }}
					/>
					<h1>{preferred_name}</h1>
					<p className='title'>CEO Founder, Example</p>
					<p>Relationship</p>
					<a href='#dd'>
						<i className='fa fa-dribbble'></i>
					</a>
					<a href='#bb'>
						<i className='fa fa-twitter'></i>
					</a>
					<a href='#dds'>
						<i className='fa fa-linkedin'></i>
					</a>
					<a href='#abc'>
						<i className='fa fa-facebook-f'></i>
					</a>
					<p>
						<button>Contact</button>
					</p>
				</div>
				<div className='wrap-profile-details'>
					<div className='wrap-contact-box-details'>
						<div>
							<div>First Name</div>
							<div>{first_name}</div>
						</div>
						<div>
							<div>Last Name</div>
							<div>{last_name}</div>
						</div>
						<div>
							<div>Home Town</div>
							<div>Abdulai Nuru-deen</div>
						</div>
						<div>
							<div>Home Town</div>
							<div>Abdulai Nuru-deen</div>
						</div>
						<div>
							<div>Phone Number</div>
							<div>
								<ul>
									<li>{mobile_1 && `Mobile 1: ${mobile_1}`}</li>
									<li>{mobile_2 && `Mobile 2: ${mobile_2}`}</li>
									<li>{mobile_3 && `Mobile 3: ${mobile_3}`}</li>
								</ul>
							</div>
						</div>
						<div>
							<div>Email</div>
							<div>Abdulai Nuru-deen</div>
						</div>
						<div>
							<div>Twitter Handle</div>
							<div>Abdulai Nuru-deen</div>
						</div>
					</div>
					<div className='wrap-contact-box-buttons mt-3'>
						<Link to={`/edit/${id}`}>Edit</Link>

						<div className='hover' onClick={() => handleDelete(contact)}>
							Delete
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Contact;
