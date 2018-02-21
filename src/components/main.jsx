import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      receptName: "Miguel’s pea soup with Parmesan crisp",
      receptAuthor: "Good Living",
      receptQuote: "‘This soup is so quick and simple that I had to add  a touch of flair with the Parmesan ‘coral’",
      receptDate: "20 November 2017",
      shareIcons : ['fa-google-plus', 'fa-facebook', 'fa-twitter']
    };
  }

  handleClick = () => {
    let elmnt = document.getElementById("cn-steps");
    elmnt.scrollIntoView(true);
  }

  render() {
    return (
      <main style={{paddingBottom: "10vh"}}>
        <div className="h100 relative cn-main-image" style={{backgroundImage:"url(" + this.props.image + ")"}}>
          <div className="gradient absolute stick-bottom" style={{width: "100%"}}/>
          <p className="absolute stick-top stick-right f-frontage margin-md cn-author" style={{color: "white"}}>
            <span>{this.state.receptDate}</span> | <span className="bold">{this.state.receptAuthor}</span>
          </p>
          <ul className="absolute stick-left follow-image text-3xl">
             {this.state.shareIcons.map((item, index) => {
              return <li key={index} style={{padding: "10px"}}><i  className={'fab '+ item}/></li>
            })}
          </ul>
          <div className="absolute image-txt">
            <h1 className="text-center">
              <a href=""><i className="fas fa-star"/></a>
              <a href=""><i className="fas fa-star"/></a>
              <a href=""><i className="fas fa-star"/></a>
              <a href=""><i className="fas fa-star-half"/></a>
              <a href=""><i className="far fa-star"/></a>
            </h1>
            <h1 className="margin-none f-pistara text-center uppercase" style={{letterSpacing: '2px'}}>
              {this.state.receptName}
            </h1>
            <p className="margin-top-md margin-bottom-md base-border-top f-pistara text-center" 
               style={{padding: "8px 16px 0", letterSpacing: '1px'}}>
              {this.state.receptQuote}
            </p>

            <span className="text-center inline-block f-charger" 
                  style={{width: "100%", letterSpacing: '2px'}} 
                  onClick={this.handleClick}>
              Jump to the directions
            </span> 
          </div>
        </div>
      </main>
    );
  }
}
export default Main;