import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
	token: string;
	user: object;
}

interface SignInCredentials {
	email: string;
	password: string;
}

interface AuthContextProps {
	user: object;
	signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>(() => {
		const token = localStorage.getItem('@ebarber:token');
		const user = localStorage.getItem('@ebarber:user');

		if (!token || !user) {
			return {} as AuthState;
		}

		return {
			token,
			user: JSON.parse(user),
		};
	});
	const signIn = useCallback(async ({ email, password }) => {
		const response = await api.post('sessions', {
			email,
			password,
		});
		const { token, user } = response.data;

		localStorage.setItem('@ebarber:token', token);
		localStorage.setItem('@ebarber:user', JSON.stringify(user));

		setData({ token, user });
	}, []);

	return (
		<AuthContext.Provider value={{ user: data.user, signIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth(): AuthContextProps {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}
