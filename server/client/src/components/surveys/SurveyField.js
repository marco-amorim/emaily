import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
	console.log(error);
	return (
		<div>
			<label>{label}</label>
			<input {...input} />
			{touched && error}
		</div>
	);
};

export default SurveyField;
