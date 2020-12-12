import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Landing from './Landing';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route path="/" exact component={Landing} />
					<Route path="/surveys" component={Dashboard} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
