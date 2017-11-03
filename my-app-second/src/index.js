// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import flower from './flower.jpg';

//const getName = (use) => use.name ;
//const flowerImg = <img src = {flower} />
//const user = {
//	name: "sethu"
//}
//ReactDOM.render(
	//getName(user),
//	flowerImg,
//	document.getElementById('root')	
//	);

/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);*/

/*function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000);
    console.log(this.props.data)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
  	const {data} =this.props;
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock data={true}/>,
  document.getElementById('root')
);*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
	<App />, 
	document.getElementById('root'));

/*setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);*/