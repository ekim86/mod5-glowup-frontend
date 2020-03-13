import React from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from '../actionCreators'
import ProductCard from '../component/ProductCard'
import Brands from '../component/Brands'

class ProductContainer extends React.Component {


  componentDidMount() {
    this.props.fetchProducts()
  }
  
  render(){
    // console.log(this.props.products, 'whatwhat')
    const products = this.props.products.map(product => <ProductCard key={product.id} product={product}/>)
    const product_brands = this.props.products.map(product => <Brands key={product.id} product={product}/>)
    return(
      <div>
        Product Container
        {products}
        {/* {product_brands} */}
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