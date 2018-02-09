import React, { Component } from 'react';

class Ingridients extends Component {
  constructor(props) {
    super();
    this.state = {
    	data: [
        {
          type: "spoon",
          size: "1tsp",
          name: "rapeseed oil"
        },
        {
          type: "count",
          size: "2",
          name: "Grower’s Selection Shallots",
          extra: "finely chopped"
        },
        {
          type: "count",
          size: "2 cloves",
          name: "garlic",
          extra: "finely chopped",
          in_fridge: true
        },
        {
          type: "gram",
          size: "200g",
          name: "dried thyme"
        },
        {
          type: "count",
          size: "1",
          name: "Oxo Reduced Salt Vegetable Stock Cube",
          extra: "dissolved in 700ml water"
        },
        {
          type: "g",
          size: "50g",
          name: "Frozen for Freshness Petits Pois"
        },
        {
          type: "g",
          size: "25g",
          name: "Parmesan",
          in_fridge: true
        },
        {
          type: "count",
          size: "3 slices",
          name: "Italian smoked prosciutto",
          extra: "finely chopped"
        },
        {
          type: "g",
          size: "50g",
          name: "Smart Price French Blue Cheese",
          extra: "rolled into £1 coin-sized balls",
          extra_optional: true
        },
        {
          type: "l",
          size: "1L",
          name: "vegetable oil",
          extra: "for frying"
        },
        {
          type: "g",
          size: "30g",
          name: "plain flour",
          in_fridge: true
        },
        {
          type: "count",
          size: "1",
          name: "egg",
          extra: "beaten",
          in_fridge: true
        },
        {
          type: "g",
          size: "75g",
          name: "Asda Plain Breadcrumbs"
        },
        {
          type: "g",
          size: "60g",
          name: "Grower’s Selection Wild Rocket"
        },
        {
          type: "spoon",
          size: "1tsp",
          name: "extra-virgin olive oil",
          in_fridge: true
        },
        {
          type: "spoon",
          size: "1tsp",
          name: "balsamic glaze"
        },
        {
          type: "g",
          size: "20g",
          name: "Parmesan shavings",
          optional: true
        }
      ]
    };
  }

  render() {
    return (
    	<div className="cn-ingr">
    		<div className="base-border-bottom cn-ingr-header ">
          <h4 className="margin-sm padding-bottom-xs padding-top-xs margin-left-md margin-right-md "> 
            <a href="#" className="frontage">
              Ingridients
              <div className="pull-right">
                <div className="padding-right-lg inline-block">
                  <button className="us ">US</button>
                  <button className="metric active">Metric</button>
                </div>
                <i className="fas fa-angle-down"/>
              </div>
            </a>
          </h4>
        </div>
        <div className="cn-ingr-list">
          <ul>
            {this.state.data.map((item, index) => {
              return (
                <li key={index} className={"cn-ingr-list-item " + (item.optional ? 'optional' : '')}>
                  <a href="#" className={"padding-md padding-right-sm fas " + (item.in_fridge ? "fa-check" : "fa-plus")}/>
                  <span className="padding-right-xs">{item.size}</span>
                  <span className="name">{item.name}</span>
                  {item.extra ? <span className={"extra " + (item.extra_optional ? "extra-optional" : "")}>, {item.extra} {item.extra_optional ? <span>(optional)</span> : ""} </span> : ""}
                  {item.optional ? <span>(optional)</span> : ""}
                </li>
              )
            })}
          </ul>
          <button className="text-2xl padding-bottom-sm padding-top-sm margin-bottom-sm add-list">
            <i className="padding-right-sm fas fa-plus-circle"></i>
            <span>Add all to shoping list</span> 
          </button>
        </div>
    	</div>
    );
  }
}

export default Ingridients;