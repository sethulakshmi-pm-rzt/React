import React from 'react';
import './ToDoContent.css';
import List from './List.js';

class ToDoContent extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      newVisibility: false
    };
    this.count = 1;
    this.addNewToDo = this.addNewToDo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }
  addNewToDo(text) {
    let newArr = [];    
    let newObj = {id: this.count++, task: text, status: false};
    newArr.push(newObj);
    let newData = newArr.concat(this.state.data);
    this.setState({
      data: newData 
    })
    //console.log("this.state.data : ", this.state.data)
  }
  handleDelete(id) {
    let filterData = this.state.data.filter((deletedItem) => {
      return deletedItem.id !== id;
    })
    this.setState({data: filterData})
  }
  checkItem(id){
    //console.log("passing id:", id)
    //console.log("array ", this.state.data)
    let newArray = this.state.data.map((item) => {
      if(item.id === id){
        item.status = !item.status
        return item;
      }
      return item;
    })
    this.setState({data: newArray});
    //console.log("newArray", this.state.data)
  }
  render () {
    //console.log("this.props : ",this.props.section);
    return (
    <div className = "todo_outer_wrapper">
        <div className = "outer_wrapper">
          <div className = "heading_div">
            <h5 className = "heading">SECTION TITLE</h5>
            
            
              <a className = "to_do_delete"
                onClick = {() => this.props.deleteSection(this.props.itemId) 
                }
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
              <input className = "hidden_text_box"
              type = "text" 
              ref={(input) => { this.textInput = input; }}
              />
              <button className = "add_text_button"
                onClick = {() => {
                  this.addNewToDo(this.textInput.value)
                  this.textInput.value = ""}
                }
              >
                Save
              </button>
            </div>}
            <List
              checkItem = {this.checkItem}
              handleDelete={this.handleDelete}
              data = {this.state.data}
            />
          </div>
        </div>  
    </div>
		);
	}
}
export default ToDoContent