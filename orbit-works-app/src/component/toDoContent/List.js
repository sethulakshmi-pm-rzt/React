import React from 'react';
import Task from './Task.js';

class List extends React.Component {
	render() {
		return (
			<div className = "list_style">
				{this.props.data.map((item) => {
					return <Task
						key = {item.id}
						item = {item}
						dateValue = {this.props.dateValue}
						checkItem = {this.props.checkItem}
						handleDelete={this.props.handleDelete}
						updateTaskData = {this.props.updateTaskData}
              			editVisibility = {this.props.editVisibility}
              			saveUpdatedTasksTitle = {this.props.saveUpdatedTasksTitle}
					/>
				})}
			</div>
		);
	}
}
export default List