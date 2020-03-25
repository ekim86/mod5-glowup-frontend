import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCart } from '../actionCreators';
import '../User.css';


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
      <div className='before-login'>
        <h1>Login</h1>
        <form className='login login-card'>
          <label>Email Address</label>
          <input name="email_address" placeholder='Email' type='text' value={this.state.email_address} onChange={this.updateUser} />
          <br/>
          <br/>
          <label>Password</label>
          <input name="password" type='password' placeholder='Password' value={this.state.password} onChange={this.updateUser} />
          <br/>
          <br/>
          <div className='login-link'>
          <a href='/' className='' onClick={this.login}>Login</a>
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