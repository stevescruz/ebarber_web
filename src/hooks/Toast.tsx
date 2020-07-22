import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
	id: string;
	type?: 'default' | 'success' | 'error';
	title: string;
	description?: string;
}

interface ToastContextProps {
	addToast(message: Omit<ToastMessage, 'id'>): void;
	removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

const ToastProvider: React.FC = ({ children }) => {
	const [messages, setMessages] = useState<ToastMessage[]>([]);

	const addToast = useCallback(
		({ type, title, description }: Omit<ToastMessage, 'id'>) => {
			const id = uuid();
			const toast = {
				id,
				type,
				title,
				description,
			};
			setMessages(oldMessages => [...oldMessages, toast]);
		},
		[],
	);

	const removeToast = useCallback(id => {
		setMessages(state => state.filter(message => message.id !== id));
	}, []);
	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}
			<ToastContainer messages={messages} />
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
