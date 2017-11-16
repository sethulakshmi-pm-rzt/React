import React from 'react';

export default class AddTaskComponent extends React.Component {
  render() {
    const { toggleNewTaskVisibility = f => f, onAddNewTask = f => f } = this.props;
    return (
      <div className="hidden_wrapper">
        <input className="hidden_box_title"
               type="text"
               placeholder="Enter task title"
               ref={(input) => {
                 this.titleInput = input;
               }}
        />
        <input className="hidden_text_box"
               type="text"
               placeholder="Enter your task"
               ref={(input) => {
                 this.textInput = input;
               }}
        />
        <button className="btn btn-default btn-sm" id="task_save_button"
                onClick={() => {
                  /* TODO: check if the description and title are entered before submit */
                  onAddNewTask({
                    title: this.textInput.value,
                    description: this.titleInput.value,
                    /* TODO: add meta data like created on updated on */
                  });
                  this.textInput.value = '';
                  this.titleInput.value = '';
                  toggleNewTaskVisibility();
                }}
        >
          <span className="glyphicon glyphicon-saved"></span>
        </button>

        <button className="to_do_task_clear_styles"
                onClick={toggleNewTaskVisibility}
        >
          x
        </button>
      </div>
    );
  };
}