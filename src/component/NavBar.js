import React from 'react';
import { Link } from 'react-router-dom'
// import ProductContainer from './component/ProductContainer'

const NavBar = () => {
  return(
    <div>
      <Link to='/glowup'>Glow Up</Link>
      <Link to='/collections/skincare'>All</Link>
      <Link to='/collections/best-sellers'>Best Sellers</Link>
      <Link to='/collections/brands'>Brands</Link>
      <Link to='/login'>Login</Link>
    </div>
  )


}

export default NavBar