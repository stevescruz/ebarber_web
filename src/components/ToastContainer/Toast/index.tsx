import React, { useEffect } from 'react';
import {
	FiAlertCircle,
	FiCheckCircle,
	FiInfo,
	FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/Toast';

import { Container } from './styles';

interface ToastProps {
	message: ToastMessage;
	style: object;
}

const icons = {
	default: <FiInfo size={24} />,
	success: <FiCheckCircle size={24} />,
	error: <FiAlertCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
	const { removeToast } = useToast();

	useEffect(() => {
		const timer = setTimeout(() => {
			removeToast(message.id);

			return () => {
				clearTimeout(timer);
			};
		}, 3000);
	}, [removeToast, message.id]);

	return (
		<Container
			type={message.type}
			hasDescription={!!message.description}
			style={style}
		>
			{icons[message.type || 'default']}

			<div>
				<strong>{message.title}</strong>
				{message.description && <p>{message.description}</p>}
			</div>

			<button type="button" onClick={() => removeToast(message.id)}>
				<FiXCircle size={18} />
			</button>
		</Container>
	);
};

export default Toast;
