import React from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../actionCreators'
import ProductCard from '../component/ProductCard'

class ProductContainer extends React.Component {


  componentDidMount() {
    this.props.fetchProducts()
  }
  
  render(){
    // console.log(this.props.products, 'whatwhat')
    let products = this.props.products.map(product => <ProductCard key={product.id} product={product}/>)
    return(
      <div>
        Product Container
        {products}
      </div>
    )
  }
  
}

function msp(state) {
  console.log('mspp', state)
  return {products: state.products}
}

function mdp(dispatch) {
  console.log('mdppppp', dispatch)
  return { fetchProducts: () => dispatch(fetchProducts()) }
}
export default connect(msp, mdp)(ProductContainer);