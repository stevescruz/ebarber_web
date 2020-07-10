import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	span {
		width: 160px;

		font-size: 14px;
		font-weight: 500;
		color: #312e38;

		background: #ff9000;
		padding: 8px;
		border-radius: 4px;

		opacity: 0;
		transition: opacity 0.5s ease-in;

		position: absolute;
		bottom: calc(100% + 12px);
		left: 50%;
		transform: translateX(-50%);

		/* Necessary as a trick for this problem: https://stackoverflow.com/questions/48281479/prevent-hover-effect-on-a-tooltip-container  */
		pointer-events: none;

		&::before {
			content: '';

			border-style: solid;
			border-color: #ff9000 transparent;
			border-width: 6px 6px 0px 6px;

			position: absolute;
			bottom: 20px;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	&:hover > span {
		opacity: 1;
	}
`;
