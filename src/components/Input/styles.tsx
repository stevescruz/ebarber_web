import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	display: flex;
	align-items: center;

	background: #232129;
	border-radius: 10px;
	border: 2px solid #232129;
	padding: 16px;

	& + div {
		margin-top: 8px;
	}

	svg {
		color: #666360;
		margin-right: 16px;
	}

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
