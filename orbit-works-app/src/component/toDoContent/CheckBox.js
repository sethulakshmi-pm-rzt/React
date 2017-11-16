import React from 'react';

class CheckBox extends React.Component {
	
	render() {
		return (
			<div className = "round">
				<input type = "checkbox" 
					id = {this.props.id}
					status = {this.props.status}
					onChange = {() => this.props.checkItem(this.props.id)}
				 />
				<label className = "label_style"
					htmlFor = {this.props.id}
				/>
			</div>
		);
	}
}
export default CheckBox