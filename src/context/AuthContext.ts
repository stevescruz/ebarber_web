import { createContext } from 'react';

interface AuthContextProps {
	name: string;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;
