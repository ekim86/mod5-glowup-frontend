import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainContainer from './container/MainContainer';
// import ProductContainer from './container/ProductContainer'
// import ReviewContainer from './container/ReviewContainer'
// import Brands from './component/Brands'
// import SkinCareContainer from './container/SkinCareContainer'
import NavBar from './component/NavBar';

function App() {


  return (
    <div>
        <NavBar />
      <Switch>
        <Route path='/glowup/collection/skincare' render={()=> <div>hellolink</div>}/>
        {/* <Route path='/' render={()=> <div>hello just slash</div>}/> */}
        <Route path='/glowup' render={() => <MainContainer/>}/>
      </Switch>
    </div>
  );
}

export default App;
