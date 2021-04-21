import React, { Fragment, useState, useContext } from 'react';
import ContactContext from '../context/ContactContext';
import AlertContext from '../context/alert/AlertContext';
import '../../assets/addcontact.css';
const AddContact = (props) => {
	const contactContext = useContext(ContactContext);
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;
	const [contact, setContact] = useState({
		firstName: '',
		lastName: '',
		email: '',
		mobile1: '',
		mobile2: '',
		mobile3: '',
		preferredName: '',
		relationship: '',
		about: '',
		website: '',
		occupation: '',
	});

	const {
		firstName,
		lastName,
		email,
		mobile1,
		mobile2,
		mobile3,
		preferredName,
		relationship,
		about,
		website,
		occupation,
	} = contact;

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName === '' || lastName === '' || mobile1 === '') {
			setAlert('Fields marked * cannot be empty', 'danger');
		}
		contactContext.addContact(contact);
		setContact({
			firstName: '',
			lastName: '',
			email: '',
			mobile1: '',
			mobile2: '',
			mobile3: '',
			preferredName: '',
			relationship: '',
			about: '',
			website: '',
			occupation: '',
		});
	};

	return (
		<Fragment>
			<div className='page-header  mb-2'>
				<div className='page-header-title'>Add Contact</div>
				<div className='line'></div>
				<div className='line'></div>
			</div>
			<div className='container'>
				<form id='contact' onSubmit={handleSubmit}>
					<div className='required-grid-form'>
						<div className='required-form-left'>
							<h4>Contact Info</h4>
							<div className='contact-info'>
								<fieldset>
									<label>First Name:</label>
									<input
										placeholder='First name'
										type='text'
										tabIndex='1'
										name='firstName'
										value={firstName}
										onChange={onChange}
									/>
								</fieldset>
								<fieldset>
									<label>Last Name:</label>
									<input
										placeholder='Last name'
										type='text'
										tabIndex='1'
										required
										name='lastName'
										value={lastName}
										onChange={onChange}
									/>
								</fieldset>
								<fieldset>
									<label>Prefered Name:</label>
									<span>By default, prefered name is set to last name</span>
									<input
										placeholder='Preferred name'
										type='text'
										tabIndex='1'
										name='preferredName'
										value={preferredName}
										onChange={onChange}
									/>
								</fieldset>
							</div>
						</div>
						<div className='required-form-left'>
							<h4>Mobile/Telephone:</h4>
							<div className='mobileNumbers'>
								<fieldset>
									<label htmlFor='mobile1'>Mobile 1</label>
									<input
										placeholder='Your Phone Number'
										type='tel'
										tabIndex='3'
										required
										name='mobile1'
										value={mobile1}
										onChange={onChange}
									/>
								</fieldset>
								<fieldset>
									<label htmlFor='mobile2'>Mobile 2</label>
									<input
										placeholder='Your Phone Number'
										type='tel'
										tabIndex='3'
										name='mobile2'
										value={mobile2}
										onChange={onChange}
									/>
								</fieldset>
								<fieldset>
									<label htmlFor='mobile3'>Mobile 3</label>
									<input
										placeholder='Your Phone Number'
										type='tel'
										tabIndex='3'
										name='mobile3'
										value={mobile3}
										onChange={onChange}
									/>
								</fieldset>
							</div>
						</div>
					</div>
					<div className='optional-fields'>
						<h4>Below are Optional;</h4>
					</div>
					<fieldset>
						<label>Relationship:</label>
						<span>e.g Friend, ex-(worker,girlfriend etc),co-worker etc</span>
						<input
							placeholder='What is the contact person to you?'
							type='text'
							tabIndex='1'
							name='relationship'
							value={relationship}
							onChange={onChange}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor='Email'>Email:</label>
						<input
							placeholder='Your Email Address'
							type='email'
							tabIndex='2'
							name='email'
							value={email}
							onChange={onChange}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor='website'>Website:</label>
						<input
							placeholder='Your Web Site (optional)'
							type='url'
							tabIndex='4'
							name='website'
							value={website}
							onChange={onChange}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor='website'>Occupation:</label>
						<input
							placeholder='Your Web Site (optional)'
							type='text'
							tabIndex='4'
							name='occupation'
							value={occupation}
							onChange={onChange}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor='website'>Add Media Handles:</label>
						Click the + sign to add a media handle
					</fieldset>
					<fieldset>
						<label htmlFor='website'>write something about him/her</label>
						<textarea
							placeholder='Type your message here....'
							tabIndex='5'
							name='about'
							value={about}
							onChange={onChange}
						></textarea>
					</fieldset>
					<fieldset>
						<button
							name='submit'
							type='submit'
							id='contact-submit'
							data-submit='...Sending'
						>
							Save
						</button>
					</fieldset>
					{/* <p className="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p> */}
				</form>
			</div>
		</Fragment>
	);
};

export default AddContact;
