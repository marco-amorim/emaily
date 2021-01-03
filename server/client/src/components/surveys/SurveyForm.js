import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
	{ label: 'Survey Title', name: 'surveyTitle' },
	{ label: 'Subject Line', name: 'subject' },
	{ label: 'Email Body', name: 'body' },
	{ label: 'Recipients List', name: 'emails' },
];

class SurveyForm extends Component {
	renderFields() {
		return FIELDS.map(({ label, name }, index) => {
			return (
				<Field
					key={index}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit((values) => console.log(values))}
				>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat white-text">
						Cancel
					</Link>
					<button className="teal btn-flat right white-text" type="submit">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.emails || '');

	_.each(FIELDS, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});

	return errors;
}

export default reduxForm({ validate, form: 'surveyForm' })(SurveyForm);