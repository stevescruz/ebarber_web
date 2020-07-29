import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import {
	Container,
	BackgroundContainer,
	AnimationContainer,
	ContentWrapper,
} from './styles';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { useToast } from '../../hooks/Toast';

interface SignUpFormData {
	name: string;
	email: string;
	password: string;
}

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const { addToast } = useToast();
	const history = useHistory();

	const handleSubmit = useCallback(
		async (data: SignUpFormData) => {
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

				await api.post('/users', data);

				addToast({
					type: 'success',
					title: 'Your sign up was successful',
				});

				history.push('/');
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const error = getValidationErrors(err);
					formRef.current?.setErrors(error);
					return;
				}
				addToast({
					type: 'error',
					title: 'Server error',
					description:
						'An unexpected error has occurred when signing up, try again.',
				});
			}
		},
		[addToast, history],
	);

	return (
		<Container>
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

			<BackgroundContainer />
		</Container>
	);
};
export default SignUp;
