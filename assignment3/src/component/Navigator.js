import React from 'react';
import '../styles.css';

class Navigator extends React.Component {

	constructor(props){
		super(props);
		this.state = {active: 'HOME'};
		this.setActive = this.setActive.bind(this);
	}

	setActive(item){
		this.setState({active: item});
	}

	render() {
		const navData = ["HOME", "PORTFOLIO", "BLOG", "CONTACT"];
		return (
			<ul>
				{navData.map(item => 
					<li className = {this.state.active === item ? "li_content active" : "li_content"}>
						<span className = "li_span"
						onClick = {() => this.setActive(item)}>
							{item}
						</span>
					</li>
				)}
			</ul>
		);
	}
}

export default Navigator