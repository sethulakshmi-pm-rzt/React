import React from 'react';
import './IconsPart.css';

class IconsPart extends React.Component {
  
  render () {
    return (
            <div className = "icons_wrapper">
                <a className = "btn btn-info btn-log">
                    <span className = "glyphicon glyphicon-headphones"></span>
                </a>
                <a className = "btn btn-info btn-log">
                    <span className = "glyphicon glyphicon-camera"></span>
                </a>
                <a className="btn btn-info btn-log">
                    <span className="glyphicon glyphicon-music"></span>
                </a>
                <a className="btn btn-info btn-log">
                    <span className="glyphicon glyphicon-download-alt"></span></a>
                <a className="btn btn-info btn-log">
                    <span className="glyphicon glyphicon-refresh"></span>
                </a>
            </div>
		);
	}
}
export default IconsPart