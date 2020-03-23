import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCart } from '../actionCreators';

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
      <div>
        <h1>Sign Up</h1>
        <form className='signup-card'>
          <label>First Name: </label>
          <input name="first_name" type='text' value={this.state.first_name} onChange={this.updateUser} />
          <br/>
          <label>Last Name: </label>
          <input name="last_name" type='text' value={this.state.last_name} onChange={this.updateUser} />
          <br/>
          <label>Email: </label>
          <input name="email_address" type='text' value={this.state.email_address} onChange={this.updateUser} />
          <br/>
          <label>Password: </label>
          <input name="password" type='password' value={this.state.password} onChange={this.updateUser} />
          <br/>
          <div className='signup-button-div'>
          <button className='signup-button' onClick={this.createUser}>Sign Up</button>
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