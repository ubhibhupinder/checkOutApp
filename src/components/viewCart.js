import React from 'react';
import { Link } from 'react-router-dom';

class ViewCart extends React.Component {
	constructor(props){
		super(props);
		this.updateItemQty = this.updateItemQty.bind(this);	
		this.removeItem = this.removeItem.bind(this);	
		this.incQty = this.incQty.bind(this);	
		this.decQty = this.decQty.bind(this);	
		
	}	
  incQty(evt){
	  var index=evt.target.attributes.getNamedItem('data-index').value
	  var qty = parseInt(document.getElementById('inputQty-'+index).value);
	  document.getElementById('inputQty-'+index).value = qty+1;
	  var title=document.getElementById('inputQty-'+index).attributes.getNamedItem('data-producttitle').value;
	  this.props.location.updateQty(title, qty+1);	  
  }

  decQty(evt){
	  var index=evt.target.attributes.getNamedItem('data-index').value
	  var qty = parseInt(document.getElementById('inputQty-'+index).value);
	  if(qty-1 > 0)
	  {
			document.getElementById('inputQty-'+index).value = qty-1;
			var title=document.getElementById('inputQty-'+index).attributes.getNamedItem('data-producttitle').value;
			this.props.location.updateQty(title, qty-1);	  
	  }
  }
  
  updateItemQty(evt){
	  var title=evt.target.attributes.getNamedItem('data-producttitle').value;
	  var qty = parseInt(evt.target.value);
	  if(evt.target.value == ""){
		  qty=0;
	  }
	  this.props.location.updateQty(title, qty);
  }

  removeItem(evt){
	  var title=evt.target.attributes.getNamedItem('data-producttitle').value;
	  this.props.location.removeItem(title);
  }
  
   render() {
      return (
			<div className="viewCart">
				<div className="cartWrapper clearfix">
					<div className="cartHeading">Shopping Cart</div>
					{this.props.location.state.items.length > 0 ? 
						<div className="cartItemsWrapper clearfix">
							<div className="cartHeader clearfix">
								<div className="chProduct">Product</div>
								<div className="chQty">Quantity</div>
								<div className="chTotal">Total</div>
								<div className="chAction">Action</div>
							</div>
							{this.props.location.state.items.map(function (item , index) {
								return (
										<div key={index} className="cartItem clearfix">
											<div className="cartItemImg">
												<img src={"/images/"+item.image} />
											</div>
											<div className="cartItemDetails">
												<div className="cartItemBrand">
													{item.brand}
												</div>
												<div className="cartItemName">
													{item.title}
												</div>
											</div>
											<div className="cartItemQty">
												<div className="ciQty"><input type="text" id={"inputQty-"+index} data-producttitle={item.title} defaultValue={item.qty} onChange={this.updateItemQty}/></div>
												<div className="ciQtyBtnWrapper">
													<div className="ciBtnQty ciAddQty" data-index={index} onClick={this.incQty}>+</div>
													<div className="ciBtnQty ciRemoveQty" data-index={index} onClick={this.decQty}>-</div>
												</div>
											</div>											
											<div className="productPrice cartItemPrice">
												{(item.qty * item.price).toFixed(2)}
											</div>
											<div className="cartDelete" id={"cartDelete-"+index} data-producttitle={item.title} onClick={this.removeItem}>X</div>
										</div>
										)
									},this
								)
							}
							<div className="clearfix">
								<div className="cartTotalPrice">
									<div className="cartOverview">Cart Overview</div>
									<div className="cartSubTotal clearfix">
										<div className="cartSubTotalText">SubTotal</div>
										<div className="productPrice cartSubTotalPriceValue">{this.props.location.state.totalPrice.toFixed(2)}</div>
									</div>
									<div className="cartTotal clearfix">
										<div className="cartTotalText">Total</div>
										<div className="productPrice cartTotalPriceValue">{this.props.location.state.totalPrice.toFixed(2)}</div>
									</div>
								</div>
							</div>
							<div className="cartActions clearfix">
								<Link to={{pathname:"/"}} className="cartContinue">Continue Shopping</Link>
								<button className="cartBtnCheckout">Checkout</button>
							</div>
						</div>
					: 	<div className="cartItemsWrapper clearfix">
							<div className="cartEmpty">There are no items in your cart yet.</div>
							<div className="cartActions clearfix">
								<Link to={{pathname:"/"}} className="cartContinue">Continue Shopping</Link>
							</div>
						</div>
					}

				</div>
			</div>				
      );
   }
}

export default ViewCart;