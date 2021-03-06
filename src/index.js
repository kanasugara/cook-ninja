import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Footer from './components/layout/footer.jsx';
import Ingridients from './components/ingridients.jsx';
import Header from './components/layout/header.jsx';
import Main from './components/main.jsx';
import Nutrition from './components/nutrition.jsx';
import Steps from './components/steps.jsx';
import ToTheTop from './components/toTheTop.jsx';

import './main.css';

import image from './media/download.jpeg';
import logo from './media/logo.png';


class App extends Component {
  render() {
    return (
      <div id="app" className= "main-grid">
        <Header style={{gridArea: "header"}} logo = {logo} />
        <Main image={image} style={{gridArea: "image"}}/>
        <Ingridients style={{gridArea: "ingridients"}}/>
        <Steps image={image} style={{gridArea: "steps"}}/>
        <Nutrition style={{gridArea: "nutrition"}}/>
        <div style={{gridArea: "comments"}}></div>
        <Footer style={{gridArea: "footer"}}/>
        <ToTheTop />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


//  prevent default for <a> in map.function

// onClick = {(e) => this.handleAddToCart(item, index, e)}
// e.preventDefault();