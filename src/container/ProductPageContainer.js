import React from 'react';
import { connect } from 'react-redux'
import { fetchProduct } from '../actionCreators'
import { addToCart } from '../actionCreators'
import ReviewContainer from './ReviewContainer'
import CartContainer from './CartContainer'
import ProductTabs from '../component/ProductTabs';
import '../Product.css';
require('../style.css');

class ProductPageContainer extends React.Component {

  constructor(props) {
    super(props)
    console.log("PROPS", this.props)
  }

  componentDidMount() {
    // console.log('productpageprops', this.props.match)
    this.props.fetchProduct(this.props.match.params.productId)
    // this.props.fetchProduct()
    // this.reviewFetchHelper()
  }

  handleClick = (id)=>{
    this.props.addToCart(id);
    }

  render() {
    console.log('props in ppc', this.props)
    return (
      <div>

        <div className='ppc-product-info'>

          <div align='ppc-image' >
            <img src={this.props.product.img_url} alt={this.props.product.name} align='left' style={{ height: '500px' }} />
          </div>

          <div className='ppc-info'>
            <h4>{this.props.product.brand}</h4>
            <h5>{this.props.product.name}
              <br />
        ${this.props.product.price}</h5>
            <button onClick={()=>{this.handleClick(this.props.product.id)}}>add to bag</button>

<div>
              <ProductTabs>
                <div label="Details">
                  {this.props.product.detail}
                </div>
                <div label="How to use">
                  {this.props.product.how_to_use}
                </div>
                <div label="Ingredients">
                  {this.props.product.ingredients}
                </div>
              </ProductTabs>
  </div>        
       

          </div>

</div>


<hr></hr>

        <div>
          <ReviewContainer productId={this.props.product.id} />
        </div>

        </div>
    )

  }
}



function msp(state, ownProps) {
  // console.log('MSP PRODUCT PAGE CONTAINER', state)
  const productId = ownProps.match.params.productId
  return {
          // products: state.products,
          // startIndex: state.startIndex,
          productId: productId,
    product: state.product
  }
}

function mdp(dispatch) {
  // console.log('MDP PRODUCT PAGE CONTAINER', dispatch)
  return {
          // fetchProduct: (product) => dispatch(fetchProduct(product)),
          fetchProduct: (id) => dispatch(fetchProduct(id)),
          addToCart: (id)=> dispatch(addToCart(id))
    // updateIndex: () => dispatch(nextPageCreator()) 
  }
}
export default connect(msp, mdp)(ProductPageContainer);