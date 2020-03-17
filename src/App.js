import React from 'react';
import './App.css';
// import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainContainer from './container/MainContainer';
import ProductPageContainer from './container/ProductPageContainer'
// import ReviewContainer from './container/ReviewContainer'
import ReviewContainer from './container/ReviewContainer'
import BrandsContainer from './container/BrandsContainer'
import SkinCareContainer from './container/SkinCareContainer'
import UserContainer from './container/UserContainer'
import NavBar from './component/NavBar';

function App() {


  return (
    <div>
        <NavBar />
      <Switch>
      {/* <Link to='/glowup'>Glow Up</Link>
      <Link to='/collection/best-sellers'>Best Sellers</Link>
      <Link to='/collection/brands'>Brands</Link>
      <Link to='glowup/collection/skincare'>Skincare</Link>
      <Link to='/login'>Login</Link> */}
        {/* <Route path='/' render={()=> <div>hello just slash</div>}/> */}
        <Route path='/glowup' render={() => <MainContainer/>}/>
        <Route exact path='/collections/skincare' render={()=> <SkinCareContainer/>}/>
        <Route path='/collections/best-sellers' render={()=> <SkinCareContainer/>}/>
        <Route path='/collections/brands' render={()=> <BrandsContainer/>}/>
        <Route path='/reviews' render={()=> <ReviewContainer/>}/>
        <Route path='/collections/skincare/products/:productName' render={()=> <ProductPageContainer/>}/>
        <Route path='/login' render={()=> <UserContainer/>}/>
      </Switch>
    </div>
  );
}

export default App;
