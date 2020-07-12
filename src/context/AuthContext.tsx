import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
	email: string;
	password: string;
}

interface AuthContextProps {
	name: string;
	signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(
	{} as AuthContextProps,
);

export const AuthProvider: React.FC = ({ children }) => {
	const signIn = useCallback(async ({ email, password }) => {
		const response = await api.post('sessions', {
			email,
			password,
		});

		console.log(`User signed in: ${response.data}`);
	}, []);

	return (
		<AuthContext.Provider value={{ name: 'Jumpman', signIn }}>
			{children}
		</AuthContext.Provider>
	);
};
