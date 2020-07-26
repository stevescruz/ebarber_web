import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={SignIn} />
			<Route exact path="/signup" component={SignUp} />
		</Switch>
	);
};

export default Routes;
