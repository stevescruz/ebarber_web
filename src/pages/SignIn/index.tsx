import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import { Container, ContentWrapper, BackgroundContainer } from './styles';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

interface SignInFormData {
	email: string;
	password: string;
}

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const { signIn } = useAuth();
	const { addToast } = useToast();

	const handleSubmit = useCallback(
		async (data: SignInFormData) => {
			formRef.current?.setErrors({});
			try {
				const schema = Yup.object().shape({
					email: Yup.string()
						.required('E-mail is required')
						.email('Type a valid e-mail'),
					password: Yup.string().required('Password is required'),
				});

				await schema.validate(data, { abortEarly: false });

				await signIn({
					email: data.email,
					password: data.password,
				});
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err);
					formRef.current?.setErrors(errors);
				}
				addToast();
			}
		},
		[signIn, addToast],
	);

	return (
		<>
			<Container>
				<ContentWrapper>
					<img src={logoImg} alt="Logo eBarber" />
					<Form ref={formRef} onSubmit={handleSubmit}>
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
					</Form>

					<a href="join">
						<FiLogIn size="16" />
						Sign up
					</a>
				</ContentWrapper>
				<BackgroundContainer />
			</Container>
		</>
	);
};

export default SignIn;
