import styled, { css } from 'styled-components';

interface ContainerProps {
	isFocused: boolean;
	isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
	width: 100%;

	display: flex;
	align-items: center;

	color: #666360;

	background: #232129;
	border-radius: 10px;
	border: 2px solid #232129;
	padding: 16px;

	& + div {
		margin-top: 8px;
	}

	svg {
		margin-right: 16px;
	}

	${props =>
		props.isFocused &&
		css`
			color: #ff9000;
			border-color: #ff9000;
		`}

	${props =>
		props.isFilled &&
		css`
			color: #ff9000;
		`}

	input {
		flex: 1;

		color: #f4ede8;

		background: transparent;
		border: none;

		&::placeholder {
			color: #666360;
		}
	}
`;
