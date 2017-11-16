import React from 'react';
import CheckBox from './CheckBox.js';
import AddTaskComponent from './AddTask';

class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
    };
  }

  render() {
    const { task, onDelete = f => f, onUpdate } = this.props;
    if (this.state.editMode) {
      return <AddTaskComponent />;
    }

    return (
      <div className="li_style">
        <i className="material-icons"
           id="task_edit"
           onClick={() => {
             this.setState({ editMode: !this.state.editMode });
           }}
        >
          mode_edit
        </i>

        <button className="to_do_task_delete_styles"
                onClick={() => onDelete(task.id)}>
          x
        </button>

        <div className="to_do_task_title_div">
          <div className="title_div">
            <h4 className="to_do_task_title">{task.title}</h4>
          </div>

          {/* create a new component for returning these date time */}
          <span className="title_date">
              <span className="to_do_task_date">
                  {this.props.dateValue.date}
                <sup>{this.props.dateValue.sup}</sup> {this.props.dateValue.month}</span>
              <span className="to_do_task_complete">Completed</span>
          </span>

        </div>
        <div>
          <CheckBox
            id={task.id}
            checkItem={task.status === 'completed'}
          />

          <span className="content_inside">
              {task.task}
          </span>
        </div>
        <div className="progress_bar_div">
          <span className="progress_bar_parent">
              <span className="progress_bar_child">
              </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Task;