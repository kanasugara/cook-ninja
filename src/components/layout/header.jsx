import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      navbarToggle : false,
      navbarItems : ['News', 'Fridge', 'New Recipe', 'Easy start', 'About'],
      navbarShareIcons : ['fa-google-plus', 'fa-facebook', 'fa-twitter']
    };
  }

  toggleNavbar () {
    this.setState({
      navbarToggle: !this.state.navbarToggle
    })
  }

  render() {
    return (
      <header>
        <div className="cn-logo" style={{gridArea: "header-logo",
                     backgroundImage:"url(" + this.props.logo + ")"}}>
        </div>
        <div style={{gridArea: "header-search"}}>
          <div className="cn-search">
              <a href="#" className="fas text-2xl fa-search"></a>
          </div>
        </div>
        <div className="cn-menu" style={{gridArea: "header-menu"}}>
          <div className="hidden-phone h100">
            <ul className="text-center uppercase frontage pull-right h100 cn-navbar">
              {this.state.navbarItems.map((item, index) => {
                return  <li className="text-center" key={index}>
                          <a href="" className="h100">
                            <span className="text-xl">{item}</span>
                          </a>
                        </li>
              })}
            </ul>
          </div>
          <div className="visible-phone h100">
            <button className="fas text-3xl h100 fa-bars cn-navbar-bars"></button>
          </div>
        </div>
        <div className="visible-desktop text-4xl padding-top-sm" style={{gridArea: "header-follow"}}>
           {this.state.navbarShareIcons.map((item, index) => {
              return <i key={index} className={'fab pull-right padding-right-md '+ item}/>
            })}
        </div>
       </header>
    );
  }
}

export default Header;