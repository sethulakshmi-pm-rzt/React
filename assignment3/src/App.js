import React from 'react';
import './styles.css';
import Logo from './component/Logo.js';
import Navigator from './component/Navigator.js';
import Footer from './component/Footer.js';
import Content from './component/Content.js';

class App extends React.Component {
  
  render() {
    return (
      <div className = "wrapper">
      	<div className = "content_wrapper1">
          <Logo />
        	<Navigator />
        	<Footer />
      	</div>
  			<Content />
      </div>
    );
  }
}

export default App