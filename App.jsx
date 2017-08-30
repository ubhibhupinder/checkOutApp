import React from 'react';
import axios from 'axios';
import Header from './header.js';
import Body from './body.js';

class App extends React.Component {
 constructor() {
      super();
		
      this.state = {
		  cart:{"items":[],
				"totalPrice":0
			},
		  products:[]

	}

    this.setProducts = this.setProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);	
    this.updateQty = this.updateQty.bind(this);	
    this.removeItem = this.removeItem.bind(this);	

}

	setProducts(items){
      this.setState({cart: this.state.cart, products: items})
	}
	
	removeItem(title){

		var thisCartItem = this.state.cart.items.find((e) => e.title === title);

		this.state.cart.items = this.state.cart.items.filter(function(item) { 
			return item.title !== title
		})
		this.state.cart.totalPrice -= thisCartItem.price*thisCartItem.qty;
		this.setState({cart: this.state.cart, products: this.state.products})
	}
	
	updateQty(title, qty){
		this.addToCart(title, qty)
		var thisCartItem = this.state.cart.items.find((e) => e.title === title);
		var prevQty = thisCartItem.qty;
		this.state.cart.items.find((e) => e.title === title).qty=qty;
		this.state.cart.totalPrice+= thisCartItem.price*(qty-prevQty);

		this.setState({cart: this.state.cart, products: this.state.products})
	}
	
	addToCart(title, qty)
	{
//		var title=e.target.attributes.getNamedItem('data-producttitle').value;
//		alert(title);
//		alert(document.getElementById('inputQty').value);
//		var qty = parseInt(document.getElementById('inputQty').value);
		var thisCartItem = this.state.cart.items.find((e) => e.title === title);
		if(thisCartItem == null)
		{
			thisCartItem = new Object();
			var thisItemFromProducts = this.state.products.find((e) => e.title === title);
			thisCartItem.image=thisItemFromProducts.image;
			thisCartItem.title=thisItemFromProducts.title;
			thisCartItem.brand=thisItemFromProducts.brand;
			thisCartItem.price=thisItemFromProducts.price;
			thisCartItem.qty=qty;
			this.state.cart.totalPrice+=thisItemFromProducts.price*qty;
			this.state.cart.items.push(thisCartItem);
		}
		else{
			this.state.cart.totalPrice+=thisCartItem.price*qty;
			this.state.cart.items.find((e) => e.title === title).qty+=qty;
		}

		this.setState({cart: this.state.cart, products: this.state.products})

	}

	componentDidMount() {
		axios.get(`./json/products.json`)
		  .then(res => {
			const items = res.data;
			this.setProducts(items);
		  });
	}
	
	render() {
		return (
			<div>
				<Header cartProp = {this.state.cart} removeItem={this.removeItem} updateQty={this.updateQty}/>
				<Body productList = {this.state.products} addToCart={this.addToCart}/>
				{this.props.children}
			</div>
		);
	}
}

export default App;