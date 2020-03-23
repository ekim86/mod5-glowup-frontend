import React from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends React.Component {
  handleAddCart = () => {

  }

  render() {
    const { cart } = this.props;

    let cartLink = null;

    if (cart.active) {
      cartLink = <div className='active-cart'>
        <div>
          <Link to={`/account/${cart.user_id}/cart/${cart.id}`}>
            Open Order:
            View Cart
            <br/>
            Cart ID:
            {cart.id}
            <br/>
          </Link>
        </div>
      </div>
    } else {
      cartLink = <div className='inactive-cart'>
        Order History:
        <Link to={`/account/${cart.user_id}/cart/${cart.id}`}>Cart</Link>
      </div>
    }

    return (
      <div>
        Cart Index Container
        {cart.active}
        {cartLink}
      </div>
    )
  }

}

export default CartIndexItem;