import React from 'react';
import List from './List';

class Section extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      newVisibility: false,
      dateValue: {},
      createdOn: new Date().toDateString(),
      editVisibility: false,
      editTitle: false,
    };
    this.count = 1;
    this.addNewToDo = this.addNewToDo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.getDate = this.getDate.bind(this);
    this.updateTaskData = this.updateTaskData.bind(this);
    this.updateSectionTitle = this.updateSectionTitle.bind(this);
    this.saveUpdatedTasksTitle = this.saveUpdatedTasksTitle.bind(this);
  }
  getDate(){
    let monthArray = this.state.createdOn.split(" ");
    let month = monthArray[1];
    let date = monthArray[2];
    let st = ["1", "21", "31"];
    let nd = ["2", "22"];
    let rd = ["3", "23"];
    let sup;
    if(st.includes(date)) {
      sup = "st";
    }
    else if(nd.includes(date)){
      sup = "nd";
    }
    else if(rd.includes(date)){
      sup = "rd";
    }
    else {
      sup = "th";
    }
    let currentDate = {"month": month, "date": date, "sup": sup};
    return currentDate;
  }
  addNewToDo(text, task_title) {
    let newArr = []; 
    let newObj = {id: this.count++, title: task_title, createdOn: this.state.createdOn, updatedOn: this.state.createdOn, task: text, status: false, percentageCompleted: text};
    newArr.push(newObj);
    let newData = newArr.concat(this.state.data);
    let dateValue = this.getDate();
    this.setState({
      data: newData,
      dateValue
    })
  }
  handleDelete(id) {
    let filterData = this.state.data.filter((deletedItem) => {
      return deletedItem.id !== id;
    })
    this.setState({data: filterData})
  }
  checkItem(id){
    let newArray = this.state.data.map((item) => {
      if(item.id === id){
        item.status = !item.status
        return item;
      }
      return item;
    })
    this.setState({data: newArray});
  }
  updateSectionTitle(id){
    //console.log("update section Id", id)
  }
  updateTaskData(id){

    this.setState({
      editVisibility: !this.state.editVisibility
    })
  }
  saveUpdatedTasksTitle(id, updatedTitle, updatedText){
    let savedArray = this.state.data.map((item) => {
      if(item.id === id){
        item.title = updatedTitle
        item.task = updatedText
      }
      return item;
    });
    this.setState({
      data: savedArray
    })
  }
  render () {
    //console.log("receiving section id from full content", this.props.id)
    return (
    <div className = "todo_outer_wrapper">
        <div className = "outer_wrapper">
          <div className = "heading_div">
            <h5 className = "heading">SECTION TITLE</h5>

            <i className = "material-icons"
              id = "section_title_edit"
              onClick = {() => {
                this.updateSectionTitle()  
              }}
            >
              mode_edit
            </i>
            
            <a className = "to_do_delete"
              onClick = {() => this.props.deleteSection(this.props.itemId)}
            >
              <span className = "glyphicon glyphicon-trash"></span>
            </a>

            <button className = "button_style"
              onClick = {() => {
                this.setState({newVisibility: !this.state.newVisibility})
              }}
            >
              + 
            </button>
          </div>
          <div className = "new_div">
            {this.state.newVisibility && <div className = "hidden_wrapper">
              <input className = "hidden_box_title"
                type = "text"
                placeholder = "Enter task title"
                ref = {(input) => {this.titleInput = input}}
              />
              <input className = "hidden_text_box"
                type = "text"
                placeholder = "Enter your task" 
                ref={(input) => {this.textInput = input}}
              />
              <button className = "btn btn-default btn-sm" id = "task_save_button"
                onClick = {() => {
                  this.addNewToDo(this.textInput.value, this.titleInput.value)
                  this.textInput.value = ""
                  this.titleInput.value = ""
                  this.setState({newVisibility: !this.state.newVisibility})
                }}
              >
                <span className = "glyphicon glyphicon-saved"></span>
              </button>

              <button className = "to_do_task_clear_styles"
                onClick = {() => {
                  this.setState({newVisibility: !this.state.newVisibility})
                }}
              >
              		x
            	</button>
            </div>}
            <List 
              dateValue = {this.state.dateValue}
              checkItem = {this.checkItem}
              handleDelete={this.handleDelete}
              data = {this.state.data} 
              updateTaskData = {this.updateTaskData}
              editVisibility = {this.state.editVisibility}
              saveUpdatedTasksTitle = {this.saveUpdatedTasksTitle}
            />
          </div>
        </div>  
    </div>
		);
	}
}
export default Section