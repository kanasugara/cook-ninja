import React, { Component } from 'react';

class ToTheTop extends Component {
  toTheTop = () => {
    let elmnt = document.getElementById("root");
    elmnt.scrollIntoView(true);
  }
  
  render() {
    return (
    	<div className="fixed" onClick={this.toTheTop} 
           style={{height: "auto", right: "15px", bottom: "15px"}}>
      <i style={{backgroundColor: "white"}} className="text-4xl fas fa-caret-square-up"></i>
      </div>
    );
  }
}

export default ToTheTop;