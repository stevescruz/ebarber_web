import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Route from './Route';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={SignIn} />
			<Route exact path="/signup" component={SignUp} />

			<Route exact path="/dashboard" component={Dashboard} isPrivate />
		</Switch>
	);
};

export default Routes;
