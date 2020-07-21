import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextProps {
	addToast(): void;
	removeToast(): void;
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

const ToastProvider: React.FC = ({ children }) => {
	const addToast = useCallback(() => {
		console.log('add toast');
	}, []);

	const removeToast = useCallback(() => {
		console.log('remove toast');
	}, []);
	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}
			<ToastContainer />
		</ToastContext.Provider>
	);
};

function useToast(): ToastContextProps {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}

	return context;
}

export { ToastProvider, useToast };
