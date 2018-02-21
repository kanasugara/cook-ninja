import React, { Component } from 'react';

class Steps extends Component {
  constructor(props) {
    super();
    this.state = {
      data:[
        "Heat half of the butter and half of the first tablespoon of olive oil in a large skillet over medium-high heat. Brown half of the beef cubes on all sides, and place into a large saucepan. Repeat with the remaining butter, olive oil, and beef. Stir the onions and garlic into the oil remaining in the skillet, and reduce heat to medium; cook and stir until the onion has softened and turned translucent, about 5 minutes. Pour in the red wine, and bring to a simmer, then scrape the onions into the saucepan with the beef.",
        "Season the beef with salt, pepper, cinnamon, nutmeg, sugar, and orange zest. Pour in the diced tomatoes and water. Cover, and bring to a simmer over medium-high heat; then reduce heat to medium-low, and continue simmering 1 hour.",
        "Meanwhile, heat the remaining tablespoon of olive oil in the skillet over medium heat. Stir in the pearl onions, and cook until they are well browned, stirring frequently, about 20 minutes. After the beef has simmered for an hour, add the pearl onions, recover, and continue simmering 20 minutes.",
        "Meanwhile, drain the peas (keeping a mugful of the cooking water) and blitz them in a blender or food processor, along with the stock cube and about half the mug of reserved water until smooth. Season and, depending on the consistency you want, add a little more water to thin the soup.",
        "Serve the soup in a bowl with the Parmesan ‘coral’ on the side and a sprinkle of freshly ground black pepper to garnish."
      ],
      timing: {
        preparationMinutes: 15,
        cookingMinutes: 8
      }
    }
  }

  render() {
    return (
    	<div id="cn-steps" className="margin-top-sm" style={{height: "auto", backgroundColor: "transparent"}}>
        <div className="base-border-bottom padding-sm">
          <span className="uppercase f-frontage text-center text-2xl" style={{letterSpacing: '-4px'}}>Directions</span>
          <div className="pull-right">
            <button className="hidden-phone pull-right">Hide Photos</button>
            <ul className="pull-left text-center timing">
               <li>
                 <p>Prep</p>
                 <span>{this.state.timing.preparationMinutes} <span className="text-muted">m</span></span>
               </li>
                <li>
                 <p>Cook</p>
                 <span>{this.state.timing.cookingMinutes} <span className="text-muted">m</span></span>
               </li>
                <li>
                 <p>Ready in</p>
                 <span>{this.state.timing.preparationMinutes + this.state.timing.cookingMinutes} <span className="text-muted">m</span></span>
               </li>
            </ul>
          </div>
        </div>
    	  <ul className="margin-md h100">
          {this.state.data.map((item, index) => {
            return (
              <li className="padding-bottom-md base-border-bottom margin-bottom-md relative " key = {index}>
                <img className="padding-bottom-md" src={this.props.image} style={{maxWidth: "100%", maxHeight: "100%"}} alt=""/>
                <span className="absolute cn-speps-num" style={{color: "white"}}>{index + 1}</span>
                <span className="padding-left-sm margin-bottom-sm text-center inline-block">{item}</span>
              </li>
            )
          })} 
        </ul>	
    	</div>
    );
  }
}

export default Steps;