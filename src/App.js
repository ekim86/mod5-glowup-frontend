import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainContainer from './container/MainContainer';
import ProductContainer from './container/ProductContainer'

function App() {


  return (
    <div>
      <Switch>
        <Route path='/products' component={ProductContainer}/>
        <Route path='/something' component={MainContainer}/>
      </Switch>
    </div>
  );
}

export default App;
