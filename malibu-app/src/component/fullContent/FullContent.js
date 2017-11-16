import React from 'react';
import './FullContent.css';
import ToDoContent from './../toDoContent/ToDoContent.js';
import IconsPart from './../iconsPart/IconsPart.js';

class FullContent extends React.Component {
	constructor(){
		super();
		this.state = {
			section: []
		}
		this.count = 1;
		this.addSections = this.addSections.bind(this);
		this.deleteSection = this.deleteSection.bind(this);
	}
	addSections(){
		let dummyArray = [];
		let dummyObj = {id: this.count++}
		dummyArray.push(dummyObj);
		let sectionData = dummyArray.concat(this.state.section);
		this.setState({
			section: sectionData
		})
	}
	deleteSection(sectionId){
		//console.log("Section Id : ", sectionId);		
		
		//console.log("Sections : ", this.state.section);
		let filterSection = this.state.section.filter((item) => {
			return item.id !== sectionId;
		})
		this.setState({section: filterSection})
	}
	
  render () {
	//console.log("this.state.section : ", this.state.section)
    return (
			<div className = "wrapper">
				<div className = "header_wrapper">
					<a className = "btn btn-info btn-lgg">
						<span className = "glyphicon glyphicon-home"></span>
					</a>
					<div className = "icon_text_div">
						<span className = "icon_text">
							MALIBU SOFTWARE
							<span className = "icon_text_second">DASHBOARD UI</span>
						</span>
					</div>
					<div className = "add_new_section_div">
						<button className = "add_new_section_button"
						onClick = {() => {
							this.addSections()
						}}
						>
							ADD NEW SECTION
						</button>
					</div>
				</div>
				<div className = "full_content_wrapper">
					<IconsPart />
					<div className = "to_do_content_wrapper">
						{this.state.section.map((item) => {
							return <ToDoContent 
							itemId={item.id}
							section = {this.state.section}
							deleteSection = {this.deleteSection}
							/>					
						})}	
					</div>
				</div>
			</div>
		);
	}
}
export default FullContent