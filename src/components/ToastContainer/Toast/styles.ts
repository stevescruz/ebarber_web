import styled, { css } from 'styled-components';

interface ContainerProps {
	type?: 'success' | 'error' | 'default';
	hasDescription: boolean;
}

const toastTypeVariations = {
	default: css`
		background: #ebf8ff;
		color: #3172b7;
	`,
	success: css`
		background: #e6fffa;
		color: #2e656a;
	`,
	error: css`
		background: #fddede;
		color: #c53030;
	`,
};

export const Container = styled.div<ContainerProps>`
	width: 360px;

	position: relative;

	${props => toastTypeVariations[props.type || 'default']}

	padding: 16px 30px 16px 16px;
	border-radius: 10px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

	display: flex;

	& + div {
		margin-top: 8px;
	}

	> svg {
		margin: 4px 12px 0 0;
	}

	div {
		flex: 1;

		p {
			font-size: 14px;
			line-height: 20px;

			margin-top: 4px;

			opacity: 0.8;
		}
	}

	button {
		position: absolute;
		right: 16px;
		top: 19px;

		color: inherit;

		background: transparent;
		border: 0;

		opacity: 0.6;
	}

	${props =>
		!props.hasDescription &&
		css`
			align-items: center;

			svg {
				margin-top: 0;
			}
		`}
`;
