import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainContainer from './container/MainContainer';
// import ProductContainer from './container/ProductContainer'
// import ReviewContainer from './container/ReviewContainer'
// import Brands from './component/Brands'
// import SkinCareContainer from './container/SkinCareContainer'
// import NavBar from './component/NavBar';

function App() {


  return (
    <div>
      <Switch>
        {/* <NavBar /> */}
        <Route path='/glowup' component={MainContainer}/>
      </Switch>
    </div>
  );
}

export default App;
