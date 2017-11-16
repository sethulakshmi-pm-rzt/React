import React from 'react';
import Image from './../Image.js';
import taskLogo from './../../image/dark-blue-lft.png';

class Tasks extends React.Component {

	render() {
		return (
			<div className = "tasks_wrapper">
				<span className = "task">TASKS</span>
				<nav>
					<Image src = {taskLogo} alt = "New Task" className = "new_task" />
					<span className = "new_task_button"> + New Task </span>
				</nav>
			</div>
		);
	}
}

export default Tasks