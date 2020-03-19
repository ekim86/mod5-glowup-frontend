import React from 'react';
import { Link } from 'react-router-dom'
import '../NavBar.css'
// import ProductContainer from './component/ProductContainer'

const NavBar = () => {
  return (
    // <div className='nav-bar'>

    //     <div className='nav-bar-logo'>
    //       <Link to='/glowup'>Glow Up</Link>
    //     </div>
    //     <div className='nav-bar-middle'>
    //       <Link to='/collections/skincare'>All</Link>
    //       <Link to='/collections/best-sellers'>Best Sellers</Link>
    //       <Link to='/collections/brands'>Brands</Link>
    //     </div>
    //     <div className='nav-bar-login'>
    //       <Link to='/login'>Login</Link>
    //     </div>

    // </div>


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
            <a className="nav-link" href="/login">Login</a>
          </div>
        </ul>

      </div>

    </nav>
  )


}

export default NavBar