import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Content from './component/Content.js';
import Banner from './component/Banner.js';

class App extends React.Component {
	render() {
		return (
			<div className = "wrapperBlock">
				<Header headData = {"Getting Started with HTML & CSS"} />
				<Banner />
				<Content />	
				<Footer />
			</div>
		  );
		}
	}

export default App
