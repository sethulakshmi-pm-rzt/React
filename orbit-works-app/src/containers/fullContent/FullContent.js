import React from 'react';
import IconsPart from '../../component/SidePanel/SidePane';
import Project from '../project/Project';
import './FullContent.css';

class FullContent extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [{
        id: 1,
        title: 'office',
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
    };
    this.sectionCount = 1;
    this.taskCount = 1;
    this.addSections = this.addSections.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
    this.onAddTask = this.onAddTask.bind(this);
  }

  addSections() {
    const section = {
      id: this.sectionCount++,
      title: this.sectionCount,
      tasks: [],
      createdOn: this.state.section.createdOn,
      updatedOn: this.state.section.updatedOn,
    };

    this.setState({
      section: [
        section,
        ...this.state.section,
      ],
    });
  }

  deleteSection(sectionId) {
    const index = this.state.section.findIndex(({ id }) => id === sectionId);
    this.state.section.splice(index, 1);
    this.setState({
      section: this.state.section,
    });
  }

  onAddTask(sectionId, task) {
    if (!task && !task.title && !task.description) return;

    const sections = Object.assign({}, this.state.section);
    const section = sections.find(({ id }) => id === sectionId);
    section.tasks = [task, ...section.tasks];
    this.setState({
      section: sections,
    });
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
            <button
              className="add_new_section_button"
              onClick={this.addSections}
            >
              ADD NEW SECTION
            </button>
          </div>

        </div>
        <div className="full_content_wrapper">
          <IconsPart />
          <div className="to_do_content_wrapper">
            {this.state.section.map((sectionItem) => (
              <Project
                key={sectionItem.id}
                sectionId={sectionItem.id}
                tasks={sectionItem.tasks}
                deleteSection={this.deleteSection}
                onAddTask={this.onAddTask}
                 />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FullContent;