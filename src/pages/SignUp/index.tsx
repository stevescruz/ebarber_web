import React, { useCallback } from 'react';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, BackgroundContainer, ContentWrapper } from './styles';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

const SignUp: React.FC = () => {
	const handleSubmit = useCallback(async (data: object) => {
		try {
			const schema = Yup.object().shape({
				name: Yup.string().required('Name required'),
				email: Yup.string()
					.required('E-mail required')
					.email('Type a valid e-mail'),
				password: Yup.string().min(
					6,
					'Type a password that is at least 6 characters long',
				),
			});
			await schema.validate(data, { abortEarly: false });
		} catch (err) {
			console.log(err);
		}
	}, []);

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
