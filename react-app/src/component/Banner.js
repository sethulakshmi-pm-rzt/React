import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image.js';
import blogBg from '../blog-bg.png';


class Banner extends React.Component {
	render () {		
		return (<Image className = "firstImage" src = {blogBg} alt = "Blog Img" />);
	}
}

export default Banner