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
      ],
      small_data :{
        time: '50 min',
        serves: 8,
        price: 53.51
      },
      isUS: false,
      cart:[]
    };

  }
  
  handleMeasureType = e => {
    this.setState({isUS: !this.state.isUS});
  }

  handleAddToCart = (item, index) => {
    this.setState((prevState, props) => ({
      data: [
        ...prevState.data.slice(0, index),
          { 
            name: item.name,
            size: item.size,
            type: item.type,
            extra: item.extra,
            in_fridge: item.in_fridge,
            extra_optional: item.extra_optional,
            optional: item.optional,
            in_cart : !item.in_cart
          },
        ...prevState.data.slice(index + 1),
      ]
    }));

     const new_cart_item = {
        name : item.name,
        size : item.size,
        type : item.type
     };
     
    if(!item.in_cart) {
      this.state.cart.push(new_cart_item);
    }
    else {
      const index = this.state.cart.indexOf(new_cart_item);
      this.state.cart.splice(index, 1);
    }

    console.log(this.state.cart);
  }
  handleAddAllToCart = (someInCart) => {
    this.state.data.map((item, index) => {
      
      let new_cart_item = {
        name : item.name,
        size : item.size,
        type : item.type
      };      

      if(someInCart) {
        item.in_cart = true;
        this.state.cart.push(new_cart_item);
      }
      else {
        item.in_cart = false;
        const index = this.state.cart.indexOf(new_cart_item);
        this.state.cart.splice(index, 1);
      }

      this.setState((prevState, props) => ({
        data: [
          ...prevState.data.slice(0, index),
            { 
              name: item.name,
              size: item.size,
              type: item.type,
              extra: item.extra,
              in_fridge: item.in_fridge,
              extra_optional: item.extra_optional,
              optional: item.optional,
              in_cart : item.in_cart
            },
          ...prevState.data.slice(index + 1),
        ]
      }));
    })
    console.log(this.state.cart);
  }

  render() {
    return (
    	<div className="cn-ingr base-border-bottom">
    		<div className="base-border-bottom cn-ingr-header">
          <h4 className="padding-bottom-xs padding-top-xs"> 
            <a href="#" className="f-frontage">
               <span style={{letterSpacing: '-2px'}}>Ingridients</span> 
              <div className="pull-right">
                <ul className="time inline-block f-pistara padding-right-md hidden-phone">
                  <li className="far fa-clock padding-right-sm margin-right-xs">
                    <span className="f-charger">
                      {this.state.small_data.time}
                    </span>
                  </li>
                  <li className="fas fa-utensils">
                    <span style={{fontWeight: "300"}} className="f-charger">
                      {this.state.small_data.serves} servings
                    </span>
                  </li>
                </ul>
                <div className="padding-right-md padding-left-md inline-block">
                  <button className={"us " + (this.state.isUS ? 'active' : '')} 
                          onClick={this.handleMeasureType}>US</button>
                  <button className={"metric " + (!this.state.isUS ? 'active' : '')} 
                          onClick={this.handleMeasureType}>Metric</button>
                </div>
                <i className="fas fa-angle-down"/>
              </div>
            </a>
          </h4>
        </div>
        <div className="cn-ingr-list f-roboto-light">
          <ul>
            {this.state.data.map((item, index) => {
              return (
                <li key={index} onClick = {() => {this.handleAddToCart(item, index)}}
                    className={"cn-ingr-list-item " + (item.optional ? 'optional' : '')}>
                  <a href="#" style={{width: "18px"}}
                  className={"padding-md padding-right-sm fas " + (!item.in_cart ? item.in_fridge ? "fa-check" : "fa-plus" : "fa-cart-arrow-down")}/>
                  <span className="padding-right-xs">{item.size}</span>
                  <span className="name">{item.name}</span>
                  {item.extra ? <span className={"extra " + (item.extra_optional ? "extra-optional" : "")}>, {item.extra} {item.extra_optional ? <span>(optional)</span> : ""} </span> : ""}
                  {item.optional ? <span>(optional)</span> : ""}
                </li>
              )
            })}
          </ul>
          <div className="text-center">
            <button className="text-2xl padding-top-sm margin-bottom-sm inline-block add-list" 
            onClick = {() => {this.handleAddAllToCart(!this.state.cart.length)}}>
            <span>{this.state.cart.length ? "Remove all from cart" : "Add all to cart"}</span> 
            </button>
            <i className="fas fa-plus"></i>
            <button className="text-2xl padding-top-sm margin-bottom-sm inline-block add-list">
              <span>Add missing to cart</span> 
            </button>
          </div>
        </div>
    	</div>
    );
  }
}

export default Ingridients;