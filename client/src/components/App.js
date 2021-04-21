import React, { Fragment } from 'react';
import ContactState from './context/ContactState';
import AlertState from './context/alert/AlertState';
import Alert from './Alert';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import AddContact from '../components/pages/AddContact';
import EditContact from '../components/pages/EditContact';
import ContactList from '../components/pages/ContactList';
// import SignIn from '../components/pages/SignIn';
// import SignUp from '../components/pages/SignUp';
import '../assets/app.css';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<ContactState>
			<AlertState>
				<Router>
					<Fragment>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/addContact' component={AddContact} />
								<Route exact path='/contacts' component={ContactList} />
								<Route exact path='/contact/:id' component={Contact} />
								<Route exact path='/edit/:id' component={EditContact} />
							</Switch>
						</div>
						<Footer />
					</Fragment>
				</Router>
			</AlertState>
		</ContactState>
	);
};

export default App;
