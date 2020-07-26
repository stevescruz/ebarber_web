import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import {
	Container,
	BackgroundContainer,
	AnimationContainer,
	ContentWrapper,
} from './styles';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

interface InputError {
	[key: string]: string;
}

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(async (data: InputError) => {
		try {
			formRef.current?.setErrors({});

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
			const error = getValidationErrors(err);

			formRef.current?.setErrors(error);
		}
	}, []);

	return (
		<Container>
			<BackgroundContainer />

			<ContentWrapper>
				<AnimationContainer>
					<img src={logoImg} alt="eBarber Logo" />
					<Form ref={formRef} onSubmit={handleSubmit}>
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
					<Link to="/">
						<FiArrowLeft />
						Return to sign in
					</Link>
				</AnimationContainer>
			</ContentWrapper>
		</Container>
	);
};
export default SignUp;
