import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
	render () {
		return (
			<div className = "footer">
				<span className = "footerLeft">@ Razorthink Inc</span>
				<span className = "footerRight">HOME</span>
			</div>);
	}
}

export default Footer;