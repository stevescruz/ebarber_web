import React from 'react';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, BackgroundContainer, ContentWrapper } from './styles';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

const SignUp: React.FC = () => {
	function handleSubmit(data: object): void {
		console.log(data);
	}

	return (
		<Container>
			<BackgroundContainer />

			<ContentWrapper>
				<img src={logoImg} alt="eBarber Logo" />
				<Form onSubmit={handleSubmit}>
					<h1>Create your eBarber account now</h1>

					<Input name="name" icon={FiUser} placeholder="Name" />
					<Input name="email" icon={FiMail} placeholder="E-mail" />
					<Input
						name="password"
						icon={FiLock}
						type="password"
						placeholder="Password"
					/>
					<Button type="submit">Sign up</Button>
				</Form>
				<a href="/">
					<FiArrowLeft />
					Return to sign in
				</a>
			</ContentWrapper>
		</Container>
	);
};
export default SignUp;
