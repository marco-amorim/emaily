import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import Landing from './Landing';
import SurveyNew from './SurveyNew';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={Landing} />
					<Route path="/surveys" exact component={Dashboard} />
					<Route path="/surveys/new" component={SurveyNew} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
