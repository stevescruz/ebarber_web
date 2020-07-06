import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: stretch;
`;

export const ContentWrapper = styled.div`
	width: 100%;
	max-width: 700px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	form {
		width: 340px;

		display: flex;
		flex-direction: column;

		text-align: center;

		margin: 80px 0;

		h1 {
			margin-bottom: 24px;
		}
	}

	a {
		display: flex;
		align-items: center;

		color: #f4ede8;
		text-decoration: none;

		svg {
			margin-right: 10px;
		}

		&:hover {
			color: ${shade(0.2, '#f4ede8')};
		}
	}
`;

export const BackgroundContainer = styled.div`
	flex: 1;

	background: url(${signUpBackgroundImg}) no-repeat;
	background-size: cover;
`;
