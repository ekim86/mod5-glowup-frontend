import React from 'react';
import { Route, Link } from 'react-router-dom'
// import ProductContainer from './component/ProductContainer'

const NavBar = () => {
  return(
    <div>
      {/* <Route path='/collection/skincare' component={ProductContainer}/> */}
      <Link to='/glowup'>Glow Up</Link>
      <Link to='/collection/best-sellers'>Best Sellers</Link>
      <Link to='/collection/brands'>Brands</Link>
      <Link to='/collection/Skincare'>Skincare</Link>
      <Link to='/login'>Login</Link>
    </div>
  )


}

export default NavBar