import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCarts, closeCart } from '../actionCreators';
import CartIndexItem from '../component/CartIndexItem';

class CartIndexContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllCarts(this.props.currentUserId)
    // debugger
  }
  render() {
    const carts = this.props.carts.map((cart, idx) => {
      return <CartIndexItem
      key={idx}
      cart={cart}
      closeCart={this.props.closeCart}
      />
    })
    
    return (
      <div>
          Carts:
        <ul>
          {carts}
        </ul>
      </div>
    )
  }
}

function msp(state, ownProps) {
  const currentUserId = ownProps.match.params.userId;
  const carts = state.carts;

  return {
    currentUserId,
    carts
  }
}

function mdp(dispatch) {
  return {
    fetchAllCarts: (userId) => dispatch(fetchAllCarts(userId)),
    closeCart: (cart) => dispatch(closeCart(cart))
  }
}

export default connect(msp, mdp)(CartIndexContainer);