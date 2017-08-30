import React from 'react';
import { Link } from 'react-router-dom';

class ViewQuickCart extends React.Component {
	constructor(props){
		super(props);
		this.updateItemQty = this.updateItemQty.bind(this);	
		this.propogateRemoveItem = this.propogateRemoveItem.bind(this);			
	}

	propogateRemoveItem(title){
		this.props.removeItem(title);
	}
	
	updateItemQty(title, qty){
		this.props.updateQty(title, qty);
	}
	
   render() {
      return (
			<div className="viewQuickCart">
				<div className="qcWrapper clearfix">
					{this.props.cartItems.items.length > 0 ? this.props.cartItems.items.map(function (item , index) {
						return ( <div key={index} className="qcItem clearfix">
									<div className="qcItemImg">
										<img src={"/images/"+item.image} />
									</div>
									<div className="qcItemDetails">
										<div className="qcItemName">
											{item.title}
											<span className="qcItemQty">{item.qty}</span>
										</div>
										<div className="qcItemBrand">
											{item.brand}
										</div>
										<div className="productPrice qcItemPrice">
											{(item.qty * item.price).toFixed(2)}
										</div>
									</div>
									<div className="qcDelete" id={"delete-"+index}>X</div>
								</div>
								)
						}, this)
						: <div className="qcEmpty">There are no items in your cart yet.</div>
					}
						<div className="qcTotalPrice clearfix"><div className="qcTotalText">Total</div><div className="productPrice qcTotalPriceValue">{this.props.cartItems.totalPrice.toFixed(2)}</div></div>
						<div className="qcActions clearfix"><Link className="btnViewCart" to={{pathname:'/viewCart/', state:this.props.cartItems, removeItem: this.propogateRemoveItem, updateQty:this.updateItemQty}}>View Cart</Link><button className="btnCheckout">Checkout</button></div>
				  
				</div>
			</div>				
      );
   }
}

export default ViewQuickCart;