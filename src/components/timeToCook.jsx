import React, { Component } from 'react';

class TimeToCook extends Component {
  constructor(props) {
    super();
    this.state = {
    	data: {
    		time: '50 min',
    		serves: 8,
    		price: 53.51
    	},
    	cookIcons : ['fa-stopwatch', 'fa-utensils', 'fa-euro-sign'],
    	cookIconsText : ['', 'Serves: ', 'Price: ']
    };
  }

  render() {
    return (
    	<div className="time" style={{padding: "10px 12.5%"}}>
    		<ul>
	            {Object.keys(this.state.data).map((key, index) => 
					<li key={index} style={{width: "30%", color: "#bd273f"}} className="inline-block">
	  					<i className={ "text-4xl fas " + this.state.cookIcons[index] }>
	  						<span style={{color: "black"}} className="padding-left-md text-2xl">{this.state.cookIconsText[index]}{this.state.data[key]}</span>
	  					</i>
	  				</li>
				)}
			</ul>
    	</div>
    );
  }
}

export default TimeToCook;