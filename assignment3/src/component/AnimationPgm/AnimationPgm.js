import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './AnimationPgm.css';

class AnimationPgm extends Component {
  constructor(props){
    super(props);
    this.state={
      activeCardIndex:0,
    }
  }
  render() {
    return (
      <div className="animation_wrapper">
        <h2 className="welcome">
          Data
        </h2>

        <div className="dataWrapper">
          {this.props.dataSet.map((item, i) =>
            <div
              key={i}
              className={'child'}
              style={{
                animationDelay: `${0.5 * i}s`
              }}
              onClick={() => {
                let val = document.getElementsByClassName("child")[i];
                let length = document.getElementsByClassName("child").length;

                console.log("ZZZZZ", i+1, 0.5 * i, item);
                console.log("11111", val, length);

              }}
            >
              {item}{i+1}--{0.5 * i}s
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default AnimationPgm;

AnimationPgm.propTypes = {
  dataSet: PropTypes.array,
};

AnimationPgm.defaultProps = {
  dataSet: [],
};
