import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Header />
					<Route path="/" exact component={Landing} />
					<Route path="/surveys" exact component={Dashboard} />
					<Route path="/surveys/new" component={SurveyNew} />
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
