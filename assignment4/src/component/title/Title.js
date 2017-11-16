import React from 'react';
import Image from './../Image.js';
import logo from './../../image/at&t-logo.jpg';

class Title extends React.Component {
	render() {
		return (
			<div className = "title_wrapper">
				<Image src = {logo} alt = "Logo Image" className = "logo_wrapper" />

				<h4 className = "id_style">ID: RA20120328</h4>
				<h1 className = "heading">Some Job 123</h1>
				
			</div>
		);
	}
}

export default Title