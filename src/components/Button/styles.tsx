import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
	height: 56px;

	color: #312e38;
	font-weight: 500;

	background: #ff9000;
	border-radius: 5px;
	border: none;
	padding: 0 16px;
	margin-top: 16px;

	transition: background-color 0.2s;

	&:hover {
		background-color: ${shade(0.2, '#ff9000')};
	}
`;
