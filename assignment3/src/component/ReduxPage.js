import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles.css';

class ReduxPage extends Component {
  setIntervalFunc = (func) => {
    this.interval = setInterval(func, 500);
  };

  constructor(props) {
    super(props);
    this.state = {
      cards: {
        index: -1,
      },
    };
  }

  componentDidMount() {
    this.setIntervalFunc(() => {
      if (this.state.cards.index === this.props.dataSet.length) {
        this.componentWillUnmount();
        return;
      }
      this.setState({
        cards: {
          index: this.state.cards.index + 1,
        },
      });
    });
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  render() {

    return (
      <div className="content_wrapper2">
        <h2 className="welcome">
          Data
        </h2>
        {/*<button*/}
          {/*onClick={this.props.getData}*/}
        {/*>*/}
          {/*ClickHere*/}
        {/*</button>*/}

        <div className={"cardWrapper"}>
          {this.props.dataSet &&
          this.props.dataSet.map((item, i) =>
            <div
              key={i}
              className={`headingText
              ${(this.state.cards.index === i) ? 'currentCard' : ''}
              ${(this.state.cards.index - 1 === i) ? 'previousCard' : ''}
              `}
              onClick={() => {
                this.setState({
                  cards:{
                    index: i,
                  }
                });
              }}
            >
              <span
                className={'textStyle'}
              >
                {item}
              </span>
            </div>,
          )}
        </div>
      </div>
    );
  }
}

export default ReduxPage;

ReduxPage.propTypes = {
  dataSet: PropTypes.array,
};

ReduxPage.defaultProps = {
  dataSet: [],
};
