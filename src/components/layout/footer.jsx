import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer style={{gridArea: "footer", backgroundColor: "lightgray"}}>
      	<h1 className="frontage text-center block uppercase">Footer</h1>
      </footer>
    );
  }
}
export default Footer;