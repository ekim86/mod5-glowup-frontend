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
import CartContainer from './container/CartContainer'
import UserContainer from './container/UserContainer'
import NavBar from './component/NavBar';

function App() {


  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/glowup' render={() => <MainContainer />} />
        <Route exact path='/collections/skincare' render={() => <SkinCareContainer />} />
        <Route path='/collections/best-sellers' render={() => <SkinCareContainer />} />
        <Route path='/collections/brands' render={() => <BrandsContainer />} />
        <Route path='/reviews' render={() => <ReviewContainer />} />
        {/* <Route path='/collections/skincare/products/:productName' render={() => <ProductPageContainer />} /> */}
        {/* <Route path='/collections/skincare/:id' render={() => <ProductPageContainer />} /> */}
        <Route path='/collections/skincare/:productId' component={ProductPageContainer} />
        <Route path='/account/:id/cart' component={CartContainer} />
        <Route path='/account/login' render={() => <UserContainer />} />
      </Switch>
    </div>
  );
}

export default App;
