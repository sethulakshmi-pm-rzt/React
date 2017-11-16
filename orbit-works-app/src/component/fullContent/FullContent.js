import React from 'react';
import IconsPart from './../iconsPart/IconsPart.js';
import ToDoContent from './../toDoContent/ToDoContent.js';
import './FullContent.css';

class FullContent extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [{
        id: 1,
        title: "office",
        tasks:
          [{
            id: 202,
            title: 'razorthinkRask',
            description: 'Diwali celebrations',
            createdOn: new Date().toDateString(),
            updatedOn: 'update Date',
            status: 'completed',
            percentageCompleted: 30,
          }],
        createdOn: new Date().toDateString(),
        updatedOn: 'section update',
      }],
      dateValue: {}
    };
    this.sectionCount = 1;
    this.taskCount = 1;
    this.addSections = this.addSections.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
    this.addNewToDo = this.addNewToDo.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  addSections() {
    let dummyArray = [];
    let dummyObj = {
      id: this.sectionCount++,
      title: this.sectionCount,
      createdOn: this.state.section.createdOn,
      updatedOn: this.state.section.updatedOn,
    };
    dummyArray.push(dummyObj);
    let sectionData = dummyArray.concat(this.state.section);
    this.setState({
      section: sectionData,
    });
    console.log('add new section details : ', this.state.section);
  }

  addNewToDo(text, task_title) {
    let newArr = [];
    let newObj = {
      taskId: this.taskCount++,
      taskTitle: task_title,
      taskCreatedOn: this.state.taskCreatedOn,
      taskUpdatedOn: this.state.taskCreatedOn,
      task: text,
      status: false,
      percentageCompleted: text,
    };
    newArr.push(newObj);
    let newData = newArr.concat(this.state.taskData);
    let dateValue = this.getDate();
    this.setState({

      data: newData,
      dateValue,
    });
  }

  getDate() {
    let monthArray = this.state.taskCreatedOn.split(' ');
    let month = monthArray[1];
    let date = monthArray[2];
    let st = ['1', '21', '31'];
    let nd = ['2', '22'];
    let rd = ['3', '23'];
    let sup;
    if (st.includes(date)) {
      sup = 'st';
    }
    else if (nd.includes(date)) {
      sup = 'nd';
    }
    else if (rd.includes(date)) {
      sup = 'rd';
    }
    else {
      sup = 'th';
    }
    let currentDate = { 'month': month, 'date': date, 'sup': sup };
    return currentDate;
  }

  deleteSection(sectionId) {
    console.log('deleting Section Id : ', sectionId);

    //console.log("Sections : ", this.state.section);
    let filterSection = this.state.section.filter((item) => {
      return item.id !== sectionId;
    });
    this.setState({ section: filterSection });
  }

  render() {

    return (
      <div className="wrapper">
        <div className="header_wrapper">
          <a className="btn btn-info btn-lgg">
            <span className="glyphicon glyphicon-home"></span>
          </a>
          <div className="icon_text_div">
						<span className="orbit_works">
							ORBIT <span className="orbit_works_second">
								WORKS
							</span>
						</span>

          </div>

          <div className="add_new_section_div">
            <button className="add_new_section_button"
                    onClick={() => {
                      this.addSections();
                    }}
            >
              ADD NEW SECTION
            </button>
          </div>

        </div>
        <div className="full_content_wrapper">
          <IconsPart />
          <div className="to_do_content_wrapper">
            {this.state.section.map((sectionItem) => {
              console.log('section item passing to the section', sectionItem);
              return <ToDoContent
                key={sectionItem.id}
                sectionId={sectionItem.id}
                tasks={sectionItem.tasks}

                deleteSection={this.deleteSection}
                addNewToDo={this.addNewToDo}
                getDate={this.getDate}
              />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FullContent;