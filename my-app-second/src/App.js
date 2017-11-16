/*import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div> Second React Pgm, Say haai ..!!
      </div>
    );
  }
}

export default App;


*/


/*import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
    
      this.state = {
         data: 0
      }

      this.setNewNumber = this.setNewNumber.bind(this)
   };

   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }

   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
  
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default App;*/

/*import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      header: "sethulakshmi",
      content: "Kerala"
    }
  }
  render(){
    let i = 1;
    let newStyle = {
      color: "#f442dc"
    }
    return (
      <div>
        <h1> Name: {this.state.header} </h1>
        <h2>  Place: {this.state.content}</h2>
        <h2>{1+1}</h2>
        <h2>{i === 0 ? "i value 0" : "i value 1"}</h2>
        <h3 style = {newStyle}>GGGG</h3>

      </div>
    );
  }
}
export default App;*/


import React from 'react';

/*class Fruit extends React.Component {
  render () {
    return (
      <div>
        <h1> Fruits </h1>
      </div>
    );
  }
}

class Veg extends React.Component {
  render () {
    return (
      <div>
        <h1> Vegetables </h1>
        <p> This is the paragraph</p>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Fruit />
        <Veg />
      </div>
      );
  }
}
*/

/*program for incrementing and decrementing number, use 2 button*/
class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      newValue: 0
    };

    this.setIncrementing = this.setIncrementing.bind(this)
    this.setDecrementing = this.setDecrementing.bind(this)
  };

  setIncrementing (){
    this.setState({newValue: this.state.newValue + 1})
  }
  setDecrementing (){
    this.setState({newValue: this.state.newValue - 1})
  }
  render() {
    return (
      <div>
        <button onClick = {this.setIncrementing}>Value increment</button>
        <button onClick = {this.setDecrementing}>Value Decrement</button>
        <Content myNumber = {this.state.newValue}></Content>
      </div>    
      );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h3> {this.props.myNumber} </h3>
      </div>
    );
  }
}

export default App;