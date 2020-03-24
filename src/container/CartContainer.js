import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import '../Cart.css';
import {
  addToCart,
  closeCart,
  fetchCartItems,
  createCart,
  fetchCart
} from '../actionCreators';
import CartCard from '../component/CartCard';
// import ProductPageContainer from '../container/ProductPageContainer'

class CartContainer extends React.Component {

  componentDidMount() {
    const { cartId, currentUserId } = this.props;
    this.props.fetchCart(cartId, currentUserId);
    this.props.fetchCartItems(cartId, currentUserId);
  }

  handleCheckout = (e) => {
    e.preventDefault();
    const { cartId, currentUserId } = this.props;
    this.props.closeCart(cartId, currentUserId);
  }

  render() {
    let cartItemList;
    if (this.props.cartItems) {
      cartItemList = this.props.cartItems.map((cartItem, idx) => {
        return (
          <CartCard
            product={cartItem.product}
            key={idx}
            cartItem={cartItem}
            currentUserId={this.props.currentUserId}
            active={this.props.cartActive}
          />
        )
      })
    }

    let checkOutButton = null;

    if (this.props.cartActive) {
      checkOutButton = <button onClick={this.handleCheckout}>Check Out</button>
    }

    return (
      <div>
        Your Cart
        {cartItemList}
        <br/>
        <br/>
        {/* <ProductPageContainer/> */}
        {/* <button onClick={this.handleCheckout}>Check Out</button> */}
        {checkOutButton}
      </div>
    )
  }

}

function msp(state, ownProps) {
  console.log('mspp', state)

  const currentUserId = ownProps.match.params.userId;
  const cartId = ownProps.match.params.cartId;
  const cartItems = state.currentCartItems;
  const cart = state.cart;
  let cartActive = true;
  if (cart) {
    cartActive = cart.active
  }

  return {
    currentUserId,
    cartId,
    cartItems,
    cartActive
  }
}

function mdp(dispatch) {
  console.log('mdppppp', dispatch)
  return { 
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    closeCart: (cart) => dispatch(closeCart(cart)),
    fetchCartItems: (cartId, userId) => dispatch(fetchCartItems(cartId, userId)),
    createCart: (cart) => dispatch(createCart(cart)),
    fetchCart: (cartId, userId) => dispatch(fetchCart(cartId, userId)) 
  }
}
export default connect(msp, mdp)(CartContainer);