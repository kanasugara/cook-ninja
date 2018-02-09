import React, { Component } from 'react';

class Steps extends Component {
  constructor(props) {
    super();
    this.state = {
      data:[
        "Preheat the oven to 190C/170C Fan/Gas 5.",
        "Bring a pan of water to the boil and simmer the peas for 3-4 mins.",
        "While the peas are cooking, pile the grated Parmesan on a nonstick baking tray so that, when it melts together, it will form a crisp shaped like delicate lacy coral. Cook in the oven for about 5 mins until melted but not browned. Gently peel the Parmesan ‘coral’ off the baking tray and leave it to cool and harden.",
        "Meanwhile, drain the peas (keeping a mugful of the cooking water) and blitz them in a blender or food processor, along with the stock cube and about half the mug of reserved water until smooth. Season and, depending on the consistency you want, add a little more water to thin the soup.",
        "Serve the soup in a bowl with the Parmesan ‘coral’ on the side and a sprinkle of freshly ground black pepper to garnish."
      ]
    }
  }

  render() {
    return (
    	<div className="cn-steps" style={{height: "auto"}}>
    	   <ul className="margin-md h100">
            {this.state.data.map((item, index) => {
              return (
                <li className="padding-bottom-md" style={{color: "white"}} key = {index}>
                  <span className="cn-speps-num">{index + 1}</span>
                  <span className="padding-left-sm">{item}</span>
                </li>
                )
            })} 
         </ul>	
    	</div>
    );
  }
}

export default Steps;