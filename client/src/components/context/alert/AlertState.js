import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import AlertContext from './AlertContext';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
	const initialState = [];

	const [state, dispatch] = useReducer(alertReducer, initialState);

	// set Alert
	const setAlert = (msg, type, timeout = 5000) => {
		const id = 1;
		dispatch({ type: SET_ALERT, payload: { msg, type, id } });

		setTimeout(() => {
			dispatch({ type: REMOVE_ALERT, payload: id });
		}, timeout);
	};

	// Remove Alert
	return (
		<AlertContext.Provider
			value={{
				alerts: state,
				setAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
