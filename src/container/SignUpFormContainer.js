import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCart } from '../actionCreators';
import '../User.css'

class SignUpFormContainer extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email_address: '',
    password: ''
  }

  updateUser = (event) => {
    const { name, value } = event.target
    this.setState(() => ({ [name]: value }))
  }

  createUser = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
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
      <div className='before-signup'>
        <h1>Sign Up</h1>
        <form className='signup'>
          <label>First Name: </label>
          <input name="first_name" placeholder='First name' type='text' value={this.state.first_name} onChange={this.updateUser} />
          <br/>
          <br/>
          <label>Last Name: </label>
          <input name="last_name" placeholder='Last Name' type='text' value={this.state.last_name} onChange={this.updateUser} />
          <br/>
          <br/>
          <label>Email Address: </label>
          <input name="email_address" placeholder='Email' type='text' value={this.state.email_address} onChange={this.updateUser} />
          <br/>
          <br/>
          <label>Password: </label>
          <input name="password" placeholder='Password' type='password' value={this.state.password} onChange={this.updateUser} />
          <br/>
          <br/>
          <div className='signup-link'>
          <a href='/' className='signup-button' onClick={this.createUser}>Sign Up</a>
          <Link to="login">Log In</Link>
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
    createCart: (cart) => dispatch(createCart(cart))
  }
}

export default connect(msp, mdp)(SignUpFormContainer);