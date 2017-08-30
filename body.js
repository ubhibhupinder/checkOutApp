import React from 'react';
import Product from './product.js';
import { BrowserRouter, Route } from 'react-router-dom'
import ProductDetails from './productDetails.js';
import ProductList from './productList.js';
import ViewCart from './viewCart.js';


class Body extends React.Component {
	constructor(props){
		super(props);

	    this.handleClickBody = this.handleClickBody.bind(this);	

	}

  handleClickBody(title, qty){
//	  alert('in body');
	  this.props.addToCart(title, qty);
	  //this.props.addToCart(e);
  }
	
   render() {
      return (
		<main>
			<div>
				<Route exact path="/" component={() => <ProductList productList={this.props.productList} handleClick={this.handleClickBody}/>}/>
				<Route path="/productDetails" component={ProductDetails}/>
				<Route path="/viewCart" component={ViewCart} />
			</div>
		</main>
      );
   }
}

export default Body;