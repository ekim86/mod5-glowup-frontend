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
            View Cart {cart.id}
            {/* <br/>
            Cart ID:
            {cart.id} */}
          </Link>
        </div>
      </div>
    } else {
      cartLink = <div className='inactive-cart'>
        <Link to={`/account/${cart.user_id}/cart/${cart.id}`}>Cart {cart.id}</Link>
      </div>
    }

    return (
      <div>
        {cartLink}
      </div>
    )
  }
}

export default CartIndexItem;