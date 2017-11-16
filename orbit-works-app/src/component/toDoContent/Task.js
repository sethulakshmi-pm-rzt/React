import React from 'react';
import CheckBox from './CheckBox.js';

class Task extends React.Component {
    constructor() {
        super();
        this.state = {
            newEditStateVariable: false
        }
    }

    render() {
        return (
            <div className="li_style"
                 key={this.props.item.id.toString()}>
                <i className="material-icons"
                   id="task_edit"
                   onClick={() => {
                       this.props.updateTaskData(this.props.item.id)
                       this.setState({newEditStateVariable: !this.state.newEditStateVariable})

                   }}
                >
                    mode_edit
                </i>

                <button className="to_do_task_delete_styles"
                        onClick={() => this.props.handleDelete(this.props.item.id)}>
                    x
                </button>

                <div className="to_do_task_title_div">
                    {this.state.newEditStateVariable ? <div>
                            <input className="edit_title"
                                   type="text"
                                   defaultValue={this.props.item.title}
                                   ref={(input) => {
                                       this.titleInput = input
                                   }}
                            />
                            <button className="btn btn-default btn-sm"
                                    id="task_update_button"
                                    onClick={() => {
                                        this.props.saveUpdatedTasksTitle(this.props.item.id, this.titleInput.value, this.textInput.value)
                                        this.textInput.value = ""
                                        this.titleInput.value = ""
                                        this.props.updateTaskData(this.props.item.id)
                                        this.setState({
                                            newEditStateVariable: !this.state.newEditStateVariable
                                        })
                                    }}
                            >
                                <span className="glyphicon glyphicon-saved"></span>
                            </button>
                        </div>
                        : <div className="title_div">
                            <h4 className="to_do_task_title">{this.props.item.title}</h4>
                        </div>
                    }

                    {!this.state.newEditStateVariable &&
                    <span className="title_date">
                    <span className="to_do_task_date">
                        {this.props.dateValue.date}
                        <sup>{this.props.dateValue.sup}</sup> {this.props.dateValue.month}</span>
                    <span className="to_do_task_complete">Completed</span>
                </span>
                    }
                </div>
                <div>
                    {!this.state.newEditStateVariable &&
                    <CheckBox
                        id={this.props.item.id}
                        checkItem={this.props.checkItem}
                    />
                    }
                    {this.state.newEditStateVariable ?
                        <input className="edit_task"
                               type="text"
                               defaultValue={this.props.item.task}
                               ref={(input) => {
                                   this.textInput = input
                               }}
                        />
                        : <span className="content_inside">
                        {this.props.item.task}
                    </span>
                    }
                </div>
                <div className="progress_bar_div">
                    {!this.state.newEditStateVariable &&
                    <span className="progress_bar_parent">
                        <span className="progress_bar_child">
                        </span>
                    </span>
                    }
                </div>
            </div>
        );
    }
}

export default Task