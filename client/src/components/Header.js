import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'Loading';
			case false:
				return 'Logged out';

			default:
				return 'Logged in';
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="left brand-logo">
						Emaily
					</a>
					<ul className="right">
						{this.renderContent()}
						<li>
							<a href="/">Login with Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
