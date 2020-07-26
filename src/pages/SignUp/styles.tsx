import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: stretch;
`;

const appearFromRight = keyframes`
	from {
		opacity: 0;
		transform: translateX(50px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
`;

export const ContentWrapper = styled.div`
	width: 100%;
	max-width: 700px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const AnimationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	animation: ${appearFromRight} 1s;

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
