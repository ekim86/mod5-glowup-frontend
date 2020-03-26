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
          <Link className='cart-link' to={`/account/${cart.user_id}/cart/${cart.id}`}>
          Order #120919{cart.id}
            {/* <br/>
            Cart ID:
            {cart.id} */}
          </Link>
        </div>
      </div>
    } else {
      cartLink = <div className='inactive-cart'>
        <Link className='cart-link' to={`/account/${cart.user_id}/cart/${cart.id}`}>Order #120919{cart.id}</Link>
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