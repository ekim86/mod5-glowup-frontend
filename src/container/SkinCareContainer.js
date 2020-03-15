import React from 'react';
import '../Product.css';
import { connect } from 'react-redux'
import { fetchProducts } from '../actionCreators'
import ProductCard from '../component/ProductCard'
// import BrandsContainer from '../container/BrandsContainer'

class SkinCareContainer extends React.Component {


  componentDidMount() {
    // debugger
    this.props.fetchProducts()
  }
  
  render(){
    const products = this.props.products.map(product => <ProductCard key={product.id} product={product}/>)
    // const product_brands = this.props.products.map(product => <BrandsContainer key={product.id} product={product}/>)
    return(
      <div>
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
export default connect(msp, mdp)(SkinCareContainer);