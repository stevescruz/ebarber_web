import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import {
	Container,
	ContentWrapper,
	AnimationContainer,
	BackgroundContainer,
} from './styles';
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
	const history = useHistory();

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

				history.push('/dashboard');
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err);
					formRef.current?.setErrors(errors);
					return;
				}
				addToast({
					type: 'error',
					title: 'Authentication error',
					description:
						'An error has occurred when signing in. Check your credentials and try again.',
				});
			}
		},
		[signIn, addToast, history],
	);

	return (
		<>
			<Container>
				<ContentWrapper>
					<AnimationContainer>
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

						<Link to="/signUp">
							<FiLogIn size="16" />
							Sign up
						</Link>
					</AnimationContainer>
				</ContentWrapper>
				<BackgroundContainer />
			</Container>
		</>
	);
};

export default SignIn;
