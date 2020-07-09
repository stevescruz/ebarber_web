import React, { useCallback, useRef } from 'react';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import { Container, BackgroundContainer, ContentWrapper } from './styles';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	console.log(formRef);

	const handleSubmit = useCallback(async (data: object) => {
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
				<a href="/">
					<FiArrowLeft />
					Return to sign in
				</a>
			</ContentWrapper>
		</Container>
	);
};
export default SignUp;
