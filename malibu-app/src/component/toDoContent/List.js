import React from 'react';
import CheckBox from './CheckBox.js';

class List extends React.Component {
	render() {
		//console.log("ppp", this.props)
		return (
			<table className = "list_style">
				<tbody>
				{this.props.data.map((item, index) => 
					<tr className = "li_style"
						key = {item.id.toString()}>
						<td className= "round">
							<CheckBox
								id = {item.id}
								checkItem={this.props.checkItem}
							 />
						</td>
						<td>
							<div className = "content_inside">
								{item.task}
							</div>
						</td>
						<td>
							<a onClick = {() => this.props.handleDelete(item.id)}>
    							<span className = "glyphicon glyphicon-trash"></span>
       						</a>
						</td>
					</tr>
				)}
				</tbody>
			</table>
		);
	}
}
export default List

