import React from 'react';
import Image from './../Image.js';
import footerLogo from './../../image/poweredby-remedy-interactive.jpg';

class Footer extends React.Component {

	render() {
		return (
			<div className = "footer_wrapper">
				<Image src = {footerLogo} alt = "Footer Logo" className = "footer_logo" />
				jbhjhvjh				
			</div>
		);
	}
}

export default Footer