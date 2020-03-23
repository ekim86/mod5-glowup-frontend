import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCart } from '../actionCreators';


class UserContainer extends React.Component {  
  state = {
    email_address: '',
    password: ''
  }

  updateUser = (event) => {
    const { name, value } = event.target
    this.setState(() => ({ [name]: value }))
  }

  login = (event) => {
    event.preventDefault()
    this.props.login(this.state)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUserId !== this.props.currentUserId) {
      const cartData = { user_id: this.props.currentUserId, active: true}
      const cart = Object.assign({}, cartData)
      this.props.createCart(cart)
    }
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
        usercontainer
        <form className='login-card'>
          <label>Email</label>
          <input name="email_address" type='text' value={this.state.email_address} onChange={this.updateUser} />
          <br/>
          <label>Password</label>
          <input name="password" type='password' value={this.state.password} onChange={this.updateUser} />
          <br/>
          <div className='login-button-div'>
          <button className='login-button' onClick={this.login}>Login</button>
          <Link to="signup">Sign Up</Link>
          </div>
        </form>
      </div>
    )
  }
}

function msp(state, ownProps) {
  const currentUser = ownProps.currentUser;
  let currentUserId = null;
  if (currentUser) {
    currentUserId= currentUser.id;
  }
  return {
    currentUserId
  }
}
function mdp(dispatch) {
  return {
    createCart: (userId) => dispatch(createCart(userId))
  }
}

export default connect(msp, mdp)(UserContainer);