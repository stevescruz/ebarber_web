import React from 'react';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Container, ContentWrapper, BackgroundContainer } from './styles';

import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
	<>
		<Container>
			<ContentWrapper>
				<img src={logoImg} alt="Logo eBarber" />
				<form>
					<h1>Please sign in</h1>

					<Input name="email" icon={FiMail} placeholder="E-mail" />

					<Input
						name="password"
						icon={FiLock}
						type="password"
						placeholder="Password"
					/>

					<Button type="submit">Sign in</Button>

					<a href="forgot">Forgot your password?</a>
				</form>

				<a href="join">
					<FiLogIn size="16" />
					Sign up
				</a>
			</ContentWrapper>
			<BackgroundContainer>
				{/* <img src={backgroundImg} alt="Background eBarber" /> */}
			</BackgroundContainer>
		</Container>
	</>
);

export default SignIn;
