import React, { useCallback, useRef, useContext } from 'react';
import * as Yup from 'yup';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import { Container, ContentWrapper, BackgroundContainer } from './styles';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';

import AuthContext from '../../context/AuthContext';

interface InputError {
	[key: string]: string;
}

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const auth = useContext(AuthContext);

	console.log(auth);

	const handleSubmit = useCallback(async (data: InputError) => {
		formRef.current?.setErrors({});
		try {
			const schema = Yup.object().shape({
				email: Yup.string()
					.required('E-mail is required')
					.email('Type a valid e-mail'),
				password: Yup.string().required('Password is required'),
			});
			await schema.validate(data, { abortEarly: false });
		} catch (err) {
			const errors = getValidationErrors(err);
			formRef.current?.setErrors(errors);
		}
	}, []);

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
