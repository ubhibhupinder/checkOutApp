import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
	constructor(props){
		super(props);
		this.propogateAddToCart=this.propogateAddToCart.bind(this);
	}
	propogateAddToCart(title, qty)
	{
//		alert(document.getElementById('inputQty').value);
		this.props.handleClick(title, qty);
	}
	
   render() {
      return (
			<div className="productDetails">
				<div className="productImage">
					<Link to={{pathname:'/productDetails/', state:this.props.productData, addToCart:this.propogateAddToCart}}>
						<img src={'./images/'+this.props.productData.image}/>
					</Link>
				</div>
				<div className="productDetailsContainer">
					<div className="productDetailsWrapper">
						<div className="productBrand">
							{this.props.productData.brand}
						</div>
						<div className="productTitle">
							{this.props.productData.title}
						</div>
						<div className="productPrice">
							{this.props.productData.price.toFixed(2)}
						</div>
					</div>
				</div>
			</div>
      );
   }
}

export default Product;