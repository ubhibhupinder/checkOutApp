import React from 'react';
import ViewQuickCart from './viewQuickCart.js';
import { Link } from 'react-router-dom';


class Header extends React.Component {

constructor(props) {
    super(props);
    
    this.state = {
      totalPrice: 0,
      isCartShowing: false
    };
    this.onCartClick = this.onCartClick.bind(this);
	this.updateQty = this.updateQty.bind(this);	
	this.removeItem = this.removeItem.bind(this);		
}

	removeItem(title){
		this.props.removeItem(title);
	}
	
	updateQty(title, qty){
		this.props.updateQty(title, qty);
	}
	
   render() {
      return (
         <div className="nav clearfix">
            <div className="logo left"><img src="images/logo.png" /></div>
			<div className="navItem right" onClick={this.onCartClick} >My Cart ({(this.props.cartProp.items) ? this.props.cartProp.items.length : 0}) <i className="arrow down"></i></div>
			<div className="navCenterWrapper clearfix">
				<div className="navItem"><Link to={{pathname:"/"}}>Home</Link></div>
				<div className="navItem">Shop <i className="arrow down"></i></div>
				<div className="navItem">Journal</div>
				<div className="navItem">More <i className="arrow down"></i></div>
			</div>
			{
			  this.state.isCartShowing
				? <ViewQuickCart cartItems ={this.props.cartProp} removeItem={this.removeItem} updateQty={this.updateQty}/>
				: null
			}		 
         </div>
		 
      );
   }
   
   onCartClick(){
	   this.setState({isCartShowing: !this.state.isCartShowing})
   }
}

export default Header;