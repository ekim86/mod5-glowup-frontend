import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editCartItem, fetchProduct, removeCartItem } from '../actionCreators';
class CartCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.cartItem.quantity,
      product_id: this.props.cartItem.product_id,
      cart_id: this.props.cartItem.cart_id,
      id: this.props.cartItem.id
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const cartItem = Object.assign({}, this.state);
    this.props.editCartItem(cartItem, this.props.currentUserId)
  }

  handleDelete = (e) => {
    e.preventDefault();
    const cartItem = Object.assign({}, this.state);
    this.props.removeCartItem(cartItem, this.props.currentUserId)
  }

  changeQuantity() {
    return (e) => {
      if (e.target.value > 0) {
        this.setState({
          quantity: e.target.value
        })
      }
    }
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <Link to={`/collections/skincare/${this.props.cartItem.product_id}`}>
              Product: {this.props.product.name}
            </Link>
          </div>
          <div>Quantity: {this.props.cartItem.quantity}</div>
          <input
            type='number'
            name='quantity'
            value={this.state.quantity}
            onChange={this.changeQuantity()}
          />
          <button onClick={this.handleSubmit}>Update</button>
          <button onClick={this.handleDelete}>Remove Item</button>
        </form>
      </div>
    )
  }
}

function mdp(dispatch) {
  return {
    editCartItem: (cartItem, userId) => dispatch(editCartItem(cartItem, userId)),
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    removeCartItem: (cartItem, userId) => dispatch(removeCartItem(cartItem, userId))
  }
}

export default connect(null, mdp)(CartCard);