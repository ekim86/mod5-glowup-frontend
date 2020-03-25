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
      userLink = <a href="/account/login" onClick={this.props.logout}>Log Out👋</a>
      cartLink = <a href={`/account/${currentUser.id}/cart/`}>Cart🛒</a>
    } else {
      userLink = <a href="/account/login">Login</a>
    }

    return (
      // <div className='nav-main'>
      //   <div>
      //   <a className="nav-bar nav-glowup" href="/glowup">GLOW UP</a>
      //   </div>
      //   <div className='nav-options'>
      //   <a href="/collections/skincare">Shop All</a>
      //   <a href="/collections/best-sellers">Best Sellers</a>
      //   </div>
      //   <div className="nav-login">
      //     {cartLink}
      //     {userLink}
      //   </div>
      // </div>


      <nav className="navbar nav-bar navbar-expand-lg navbar-light navbar-fixed-top sticky">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="">
            <a className="nav-bar-glowup" href="/glowup" style={{color: '#fa2acd'}}>GLOW UP</a>
          </div>
          <ul className="navbar-nav mr-auto nav-options">


            <div className='nav-bar-center'>

              <div className="">
                <a className='' href="/collections/skincare">Shop All</a>
              </div>

              {/* <div className="">
                <a href="/collections/best-sellers">Best Sellers</a>
              </div>

              <div className="">
                <a href="/collections/brands">Brands</a>
              </div> */}
            </div>


          </ul>
          <div className="nav-bar-login">
            {cartLink}
            {userLink}
          </div>
        </div>

      </nav>


    )
  }

}

export default NavBar