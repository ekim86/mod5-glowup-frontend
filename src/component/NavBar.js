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
      Login
    </div>
  )


}

export default NavBar