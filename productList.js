import React from 'react';
import Product from './product.js';

class ProductList extends React.Component {
	constructor(props){
		super(props);

	    this.handleClickBody = this.handleClickBody.bind(this);	

	}

  handleClickBody(title, qty){
	  //alert('in productList');
	  this.props.handleClick(title, qty);
	  //this.props.addToCart(e);
  }	
	
   render() {
      return (
         <div className="productsBody clearfix">
			<div className="banner">
				<div className="bannerCenter">
					<div className="bannerCenterContent">
						<span className="bannerTitle">Plates</span>
						<div className="bannerDescription">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.
						</div>						
					</div>
				</div>
			</div>
			<div className="productListing">
				{this.props.productList.map((thisProduct, i) => <Product 
				key = {i} productIndex={i} productData = {thisProduct} handleClick={this.handleClickBody}/>)}
			</div>
         </div>
      );
   }
}

export default ProductList;