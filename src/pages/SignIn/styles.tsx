import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: stretch;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 700px;

	form {
		display: flex;
		flex-direction: column;

		margin: 80px 0;
		width: 340px;
		text-align: center;

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
