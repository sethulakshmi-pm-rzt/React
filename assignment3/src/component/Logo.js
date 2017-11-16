import React from 'react';
import '../styles.css';
import Image from './Image.js';
import logo from './../image/logo.png';

class Logo extends React.Component {
	render () {		
		return (<Image className = "logo_image1" src = {logo} alt = "Logo Image" />);
	}
}

export default Logo