import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
	render () {
		const {className, src, alt} = this.props
		return (
			<img
			 className = {className}
			 src = {src} 
			 alt = {alt} 
			 />
		);
	}
}

export default Image