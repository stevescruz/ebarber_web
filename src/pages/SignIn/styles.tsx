import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

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

		> a {
			display: block;

			color: #f4ede8;
			text-decoration: none;

			margin-top: 24px;

			transition: color 0.2s;

			&:hover {
				color: ${shade(0.2, '#f4ede8')};
			}
		}
	}

	a {
		display: flex;
		align-items: center;

		color: #ff9000;
		text-decoration: none;

		svg {
			margin-right: 10px;
		}

		&:hover {
			color: ${shade(0.2, '#ff9000')};
		}
	}
`;

export const BackgroundContainer = styled.div`
	flex: 1;
	background: url(${signInBackgroundImg}) no-repeat center;
	background-size: cover;
`;
