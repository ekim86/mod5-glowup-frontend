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
    // const carts = this.props.carts.map((cart, idx) => {
    //   return <CartIndexItem
    //   key={idx}
    //   cart={cart}
    //   closeCart={this.props.closeCart}
    //   />
    // })

    const openOrder = () => {
      let order = [];

      order = this.props.carts.filter((cart) => cart.active)

      const orderCard = order.map((cart, idx) => {
        return <CartIndexItem
          key={idx}
          cart={cart}
          closedCart={this.props.closeCart}
        />
      })

      return orderCard;
    }

    const orderHistory = () => {
      let orders = [];

      orders = this.props.carts.filter((cart) => !cart.active)

      const orderHistoryCards = orders.map((cart, idx) => {
        return <CartIndexItem
          key={idx}
          cart={cart}
          closedCart={this.props.closeCart}
        />
      })

      return orderHistoryCards;
    }

    return (
        <div className='before-cart'>
        <h2>
          Your Order(s)
          </h2>
        <br />
        <div className='cart-box active-cart-container'>
          <h4>
            [ Waiting to Checkout ]
            </h4>
          <div>
            <h5>
              {openOrder()}
              </h5>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='cart-box inactive-cart-container'>
          <h4>
            [ Order History ]
            </h4>
          <div>
            <h5>
            {orderHistory()}
            </h5>
          </div>
        </div>
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