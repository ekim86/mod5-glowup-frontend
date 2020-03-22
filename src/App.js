import React from 'react';
import './App.css';
// import './App.css';
import { withRouter, Route, Switch } from 'react-router-dom'
import MainContainer from './container/MainContainer';
import ProductPageContainer from './container/ProductPageContainer'
// import ReviewContainer from './container/ReviewContainer'
import ReviewContainer from './container/ReviewContainer'
import BrandsContainer from './container/BrandsContainer'
import SkinCareContainer from './container/SkinCareContainer'
import CartContainer from './container/CartContainer'
import UserContainer from './container/UserContainer'
import SignUpFormContainer from './container/SignUpFormContainer';
import NavBar from './component/NavBar';
import * as requests from './requests';

class App extends React.Component {

  state = {
    user: null
  }

  componentDidMount(){
    const token = localStorage.token

    if(token){
      //get user info

      fetch("http://localhost:4000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
        } else {
          this.setState({
            user: response
          })
        }
      })
    }
  }

  createUser = (user) => {
    requests.createUser(user)
      .then(resp => {
        if (resp.errors) {
          alert(resp.errors)
        } else {
          this.setState(() => ({ user: resp.user }), () => {
            localStorage.token = resp.token
          })
        }
      })
  }

  login = (user) => {
    requests.loginUser(user)
      .then(resp => {
        if (resp.errors) {
          alert(resp.errors)
        } else {
          this.setState(() => ({ user: resp.user }), () => {
            localStorage.token = resp.token
          })
        }
        this.props.history.push('/glowup')
      }
    )
  }

  logout = () => {
    this.setState({
      user: null
    }, () => {
      localStorage.removeItem("token")
    })
    this.props.history.push('/account/login')
  }

  render () {
    // debugger
    return (
      <div>
        <NavBar currentUser={this.state.user} logout={this.logout}/>
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
          {/* <Route path='/account/login' render={() => <UserContainer />} /> */}
          <Route path='/account/login' render={() => <UserContainer login={this.login} currentUser={this.state.user}/>}/>
          <Route path='/account/signup' render={() => <SignUpFormContainer createUser={this.createUser} currentUser={this.state.user}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
