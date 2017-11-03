import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image.js';
import logo from '../logo.png';


class Banner extends React.Component {
	render () {		
		return (<Image className = "firstImage" src = {logo} alt = "Logo Img" />);
	}
}

export default Banner