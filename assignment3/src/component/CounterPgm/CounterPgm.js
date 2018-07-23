import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './CounterPgm.css';

class CounterPgm extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0,
    }
  }

  toIncrement = () => {
    this.setState({
      counter: this.state.counter+1
    })
  };

  render() {
    return (
      <div className="counter_wrapper">

        <h2 className="heading">
          Counter Pgm Redux
        </h2>

        <button
          onClick={() => {
            this.toIncrement();
          }}
        >
          +
        </button>

        <span
          className={"value"}
        >
          {this.state.counter}
        </span>

        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter-1
            })
          }}
        >
          -
        </button>

      </div>
    );
  }
}

export default CounterPgm;

CounterPgm.propTypes = {

};

CounterPgm.defaultProps = {

};
