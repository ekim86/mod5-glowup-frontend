import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  closeCart,
  fetchCartItems,
  fetchAllProducts,
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
    this.props.fetchAllProducts();
  }

  handleCheckout = (e) => {
    e.preventDefault();
    const { cartId, currentUserId } = this.props;
    this.props.closeCart(cartId, currentUserId);
    const cartData = { user_id: currentUserId, active: true};
    const newCart = Object.assign({}, cartData);
    this.props.createCart(newCart);
  }

  render() {
    let cartItemList;
    if (this.props.products.length > 0) {
      cartItemList = this.props.cartItems.map((cartItem, idx) => {
        const product = this.props.products.find(product => product.id == cartItem.product_id)
        return (
          <CartCard
            product={product}
            key={idx}
            cartItem={cartItem}
            currentUserId={this.props.currentUserId}
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
        Cart Container
        {cartItemList}
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
  const products = state.products;
  const cart = state.cart;
  let cartActive = true;
  if (cart) {
    cartActive = cart.active
  }
  // debugger
  return {
    currentUserId,
    cartId,
    cartItems,
    products,
    cartActive
  }
}

function mdp(dispatch) {
  console.log('mdppppp', dispatch)
  return { 
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    closeCart: (cart) => dispatch(closeCart(cart)),
    fetchCartItems: (cartId, userId) => dispatch(fetchCartItems(cartId, userId)),
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    createCart: (cart) => dispatch(createCart(cart)),
    fetchCart: (cartId, userId) => dispatch(fetchCart(cartId, userId)) 
  }
}
export default connect(msp, mdp)(CartContainer);