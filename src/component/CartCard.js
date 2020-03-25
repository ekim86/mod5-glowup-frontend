import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Cart.css';
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

  componentWillUpdate(nextProps) {
    if (nextProps.cartItem.id != this.props.cartItem.id) {
      this.setState({
        quantity: nextProps.cartItem.quantity,
        product_id: nextProps.cartItem.product_id,
        cart_id: nextProps.cartItem.cart_id,
        id: nextProps.cartItem.id
      })
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
    let quantity = this.props.cartItem.quantity;

    if (this.props.active) {
      quantity = <input
                  type='number'
                  name='quantity'
                  value={this.state.quantity}
                  onChange={this.changeQuantity()}
                  style={{width: '5vh'}}
                />
    }

    return (
      <div>
        <form>
          <div className='cart-detail'>
            <Link to={`/collections/skincare/${this.props.cartItem.product_id}`}>
              <img src={this.props.product.img_url} className='cart-image'/>
            </Link>
            <br/>
            <div className='cart-productname-quantity'>
              <div>
                {this.props.product.name}
              </div>
              <br/>
              <div>
                Quantity: {quantity}
              </div>
              <div>
                Price: ${this.props.product.price.toFixed(2)}
              </div>
              <br/>
              <button className={'cart-button' + (this.props.active ? " " : " disabled")} onClick={this.handleSubmit} disabled={!this.props.active}>Update</button>
              <button className={'cart-button' + (this.props.active ? " " : " disabled")} onClick={this.handleDelete}>Remove Item</button>
            </div>
          </div>
        </form>
        <hr/>
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