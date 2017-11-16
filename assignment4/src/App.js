import React from 'react';
import Navigator from './component/navigator/Navigator.js';
import Title from './component/title/Title.js';
import Tasks from './component/tasks/Tasks.js';
import Content from './component/content/Content.js';
import Footer from './component/footer/Footer.js';


class App extends React.Component {
  render() {
    return (
      <div className = "outer_wrapper">
        <Navigator />
        <Title />
        <Tasks />
        <Content />
        <Footer />
      </div>

    );
  }
}

export default App
