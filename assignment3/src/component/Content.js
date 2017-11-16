import React from 'react';
import '../styles.css';

class Content extends React.Component {
	render () {		
		return (
			<div className = "content_wrapper2">
				<h2 className = "welcome">WELCOME!</h2>
				<p className = "para1">
					DOMDESIGN IS DOMINIK GEISLER. I WILL CONCEIVE, DESIGN<br />AND DEVELOP YOUR NEW WEBSITE OR PRINT PRODUCT.
				</p>
				<span className = "span_data">
					I THINK YOU WILL LOVE WORKING WITH ME!
				</span>
				<p className = "para2">
					Hey! My name is Dominik Geisler and I am a freelancer from Amberg/Germany. I advise, conceive, design and mix standers of design with<br />innovative and new ideas. Check out my portfolio and don't hesitate to contact me.
				</p>

				<input type = "checkbox" value = {item.status} />
			</div>
		);
	}
}

export default Content