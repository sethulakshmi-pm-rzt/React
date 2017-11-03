import React from 'react';
import propType from 'prop-types';
import './styles.css';
import Banner from './component/Banner.js';

class App extends React.Component {
  render() {
    return (
      <div className = "wrapper">
        <Banner />
      </div>
    );
  }
}

export default App;
