import React from 'react';
import { Link } from 'react-router-dom';

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

export default SignUpFormContainer;