import React from 'react';
import { connect } from 'react-redux'
import { fetchProduct, addToCart, fetchReviews } from '../actionCreators'
import ReviewContainer from './ReviewContainer'
import CartContainer from './CartContainer'
import ProductTabs from '../component/ProductTabs';
import ReviewIndex from '../component/ReviewIndex';
import ReviewFormNewContainer from './ReviewFormNewContainer';
import '../Product.css';
require('../style.css');

class ProductPageContainer extends React.Component {

  constructor(props) {
    super(props);
    console.log("PROPS", this.props);
    this.state = {
      cartItem: {
        quantity: 0,
        product_id: this.props.productId,
        cart: this.props.cart
      }
    }
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.fetchProduct(productId);
    this.props.fetchReviews(productId);
  }

  changeQuantity() {
    return (e) => {
      if (e.target.value > 0) {
        this.setState({
          cartItem: {
            quantity: e.target.value,
            product_id: this.props.productId,
            cart_id: this.props.userCartId
          }
        })
      }
    }
  }

  handleClick = () => {
    if (this.state.cartItem.quantity > 0) {
      const cartItem = Object.assign({}, this.state.cartItem)
      this.props.addToCart(cartItem, this.props.currentUserId);
    }
  }

  renderAddToCart() {
    let addToCartSection = null;
    if (this.props.currentUserId) {
      addToCartSection = <div className='product-add-container'>
        <input
        className ='ppc-quantity'
          type='number'
          name='quantity'
          value={this.state.cartItem.quantity}
          onChange={this.changeQuantity()}
        />
        <br/>
      <button className='add-to-bag-btn' onClick={()=>{this.handleClick()}}>
        Add to Cart
      </button>
      </div>
    }
    return addToCartSection
  }

  renderReviewForm() {
    let reviewForm = null;
    if (this.props.currentUserId) {
      reviewForm = <ReviewFormNewContainer
                      productId={this.props.productId}
                      currentUserId={this.props.currentUserId}
                      currentUserName={this.props.currentUserName}
                    />
    }
    
    return reviewForm;
  }

  render() {
    console.log('props in ppc', this.props)

    if(!this.props.product) return null;
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
              ${this.props.product.price}
            </h5>
            {this.renderAddToCart()}
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
          {/* <ReviewContainer productId={this.props.product.id} /> */}
          {/* <ReviewFormNewContainer productId={this.props.productId} currentUserId={this.props.currentUserId} currentUserName={this.props.currentUserName}/> */}
          {this.renderReviewForm()}
          <ReviewIndex productId={this.props.product.id} currentUserId={this.props.currentUserId} />
        </div>
      </div>
    )
  }
}

function msp(state, ownProps) {
  // console.log('MSP PRODUCT PAGE CONTAINER', state)
  const productId = ownProps.match.params.productId;
  const product = state.product;
  const currentUser = ownProps.currentUser
  let currentUserId = null;
  let currentUserName = null;
  let userCart = ownProps.currentCart;
  let userCartId = null;
  if (currentUser) {
    currentUserId = currentUser['id'];
    currentUserName = currentUser['first_name'];
  }
  if (userCart) {
    userCartId = userCart.id
  }

  return {
    productId,
    product,
    currentUserId,
    currentUserName,
    userCartId
  }
}

function mdp(dispatch) {
  // console.log('MDP PRODUCT PAGE CONTAINER', dispatch)
  return {
          // fetchProduct: (product) => dispatch(fetchProduct(product)),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    addToCart: (cartItem, userId)=> dispatch(addToCart(cartItem, userId)),
    fetchReviews: (productId) => dispatch(fetchReviews(productId)),
    // updateIndex: () => dispatch(nextPageCreator()) 
  }
}
export default connect(msp, mdp)(ProductPageContainer);