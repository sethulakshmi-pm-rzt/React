import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
	render() {
		return (
			<ul className = "nextList">
				{this.props.data.map(item => <li>{item}</li>)}
			</ul>
		);
	}
}

export default List