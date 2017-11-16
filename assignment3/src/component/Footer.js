import React from 'react';
import '../styles.css';

class Footer extends React.Component {
	render () {		
		return (
			<footer className = "footer">
				&copy 2012 DOMDESIGN. 
				<span className = "footer_span">Impressum.</span> 
			</footer>
		);
	}
}

export default Footer