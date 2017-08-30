import React from 'react';

class ProductDetails extends React.Component {
	constructor(props){
		super(props);

		this.addToCartClicked = this.addToCartClicked.bind(this);	

	}
	
  componentWillMount() { console.log("ProductDetails Component Will mount"); }
  componentDidMount() { console.log("ProductDetails Component did mount"); }
  addToCartClicked(e){
	if(document.getElementById('inputQty').value == "" || document.getElementById('inputQty').value == "0")
	{
		alert('Please provide quantity. Quantity cannot be blank or 0')
		return;
	}
	var title=e.target.attributes.getNamedItem('data-producttitle').value;
	var qty = parseInt(document.getElementById('inputQty').value);
	this.props.location.addToCart(title, qty);
  }
  
  incQty(){
	  var qty = parseInt(document.getElementById('inputQty').value);
	  document.getElementById('inputQty').value = qty+1;
  }

  decQty(){
	  var qty = parseInt(document.getElementById('inputQty').value);
	  if(qty-1 > 0)
	  {
		document.getElementById('inputQty').value = qty-1;
	  }
  }

  render() {

   return (
		<div className="productDetailsWrapper">
			<div className="productDetailsHeading">
				<div className="hrdProductHeirarchy">Home / Plates /</div><div className="hdrProductName">{this.props.location.state.title}</div>
			</div>
			<div className="infProductDetails">
				<div className="infProductImage">
					<img src={'/images/'+this.props.location.state.image}/>
				</div>
				<div className="productInfo">
					<div className="productBrand infProductBrand">
						{this.props.location.state.brand}
					</div>
					<div className="infProductName">
						{this.props.location.state.title}
					</div>
					<div className="productPrice infProductPrice">
						{this.props.location.state.price.toFixed(2)}
					</div>
					<div className="productDesc infProductDesc">
						{this.props.location.state.description}
					</div>
					<div className="cartOptions clearfix">
						<div className="qty"><input type="text" id="inputQty" defaultValue="1"/></div>
						<div className="qtyBtnWrapper">
							<div className="btnQty addQty" onClick={this.incQty}>+</div>
							<div className="btnQty removeQty" onClick={this.decQty}>-</div>
						</div>
						<button data-producttitle={this.props.location.state.title} onClick={this.addToCartClicked}>Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
			
      );
   }
}

export default ProductDetails;