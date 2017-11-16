import React from 'react';
import AddTaskComponent from '../../component/AddTask';
import Task from '../../component/Task';
import './Project.css';

const ProjectHeader =
  ({

     title = 'Untitled',

     toggleEditMode = f => f,
     deleteSection = f => f,
     addNewTask = f => f,
   }) => (
    <div className="heading_div">
      <h5 className="heading">{title}</h5>

      <i className="material-icons"
         id="section_title_edit"
         onClick={toggleEditMode}>
        mode_edit
      </i>

      <a className="to_do_delete"
         onClick={deleteSection}
      >
        <span className="glyphicon glyphicon-trash"></span>
      </a>

      <button
        className="button_style"
        onClick={addNewTask}
      >
        +
      </button>
    </div>
  );

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      newVisibility: false,
      dateValue: {},
      editVisibility: false,
      editTitle: false,
    };
    this.count = 1;
    this.handleDelete = this.handleDelete.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.updateTaskData = this.updateTaskData.bind(this);
    this.updateSectionTitle = this.updateSectionTitle.bind(this);
    this.saveUpdatedTasksTitle = this.saveUpdatedTasksTitle.bind(this);
  }


  handleDelete(id) {
    let filterData = this.state.data.filter((deletedItem) => {
      return deletedItem.id !== id;
    });
    this.setState({ data: filterData });
  }

  checkItem(id) {
    let newArray = this.state.data.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
        return item;
      }
      return item;
    });
    this.setState({ data: newArray });
  }

  updateSectionTitle(id) {
    console.log('update section Id', id);
  }

  updateTaskData(id) {

    this.setState({
      editVisibility: !this.state.editVisibility,
    });
  }

  saveUpdatedTasksTitle(id, updatedTitle, updatedText) {
    let savedArray = this.state.data.map((item) => {
      if (item.id === id) {
        item.title = updatedTitle;
        item.task = updatedText;
      }
      return item;
    });
    this.setState({
      data: savedArray,
    });
  }

  render() {
    const { sectionId, tasks, deleteSection, onAddTask } = this.props;
    return (
      <div className="todo_outer_wrapper">
        <div className="outer_wrapper">
          <ProjectHeader
            title={'Untitled'}
            toggleEditMode={f => f}
            deleteSection={f => f}
            addNewTask={f => f}
          />
          <div className="new_div">
            {this.state.newVisibility &&
            <AddTaskComponent toggleNewTaskVisibility={f => f}
                              onAddNewTask={f => f} />}
            <div className="list_style">
              {tasks && tasks.map((task) => (<Task
                key={task.id}
                task={task}
              />))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;