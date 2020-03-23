import React from 'react';
import { Link } from 'react-router-dom'
import '../NavBar.css'
// import ProductContainer from './component/ProductContainer'

class NavBar extends React.Component {
  render() {
    const { currentUser } = this.props;
    let userLink;
    let cartLink = null;

    if (currentUser) {
      userLink = <button onClick={this.props.logout}>Log Out</button>
      cartLink = <a className="nav-link" href={`/account/${currentUser.id}/cart/`}>Cart</a>
    } else {
      userLink = <a className="nav-link" href="/account/login">Login</a>
    }

    return (
  
      <nav className="navbar navbar-expand-lg sticky bg-white">
  
        <div className="collapse navbar-collapse nav-bar" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <div>
              <a className="navbar-brand" href="/glowup">GLOW UP</a>
            </div>
            <li className="nav-item active">
              <a className="nav-link" href="/collections/skincare">Shop All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/collections/best-sellers">Best Sellers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/collections/brands">Brands</a>
            </li>
            <div>
              {/* <a className="nav-link" href={`/account/1/cart/`}>Cart</a> */}
              {cartLink}
            </div>
            <div>
              {/* <a className="nav-link" href="/account/login">Login</a> */}
              {userLink}
            </div>
          </ul>
  
        </div>
  
      </nav>
    )
  }

}

export default NavBar