import React from 'react';
import '../Product.css';
import { connect } from 'react-redux'
import { fetchProducts } from '../actionCreators'
import ProductCard from '../component/ProductCard'
import BrandsContainer from '../container/BrandsContainer'
import { nextPageCreator } from '../actionCreators';
import MoreButton from '../component/MoreButton'
class SkinCareContainer extends React.Component {


  componentDidMount() {
    // debugger
    this.props.fetchProducts()
  }

  
  
  render(){
    // const products = this.props.products.map(product => <ProductCard key={product.id} product={product}/>)
    const showProducts = this.props.products.slice(this.props.startIndex, this.props.startIndex + 12) 
    const product_brands = this.props.products.map(product => <BrandsContainer key={product.id} product={product}/>)
    return(
      <div>
        {showProducts.map(product=>
          <ProductCard key={product.id} product={product}/>)}
        {/* {product_brands} */}
        <MoreButton updateIndex={this.props.updateIndex}/>
      </div>
    )
  }

}

function msp(state) {
  console.log('mspp', state)
  return {
    products: state.products,
    startIndex: state.startIndex,
  }
}

function mdp(dispatch) {
  console.log('mdppppp', dispatch)
  return { 
    fetchProducts: () => dispatch(fetchProducts()),
    updateIndex: () => dispatch(nextPageCreator()) 
  }
}
export default connect(msp, mdp)(SkinCareContainer);