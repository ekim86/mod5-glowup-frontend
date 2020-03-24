import React from 'react';
import '../Product.css';
import { connect } from 'react-redux'
import { fetchAllProducts } from '../actionCreators'
import ProductCard from '../component/ProductCard'
// import BrandsContainer from '../container/BrandsContainer'
import { nextPageCreator } from '../actionCreators';
import { previousPageCreator } from '../actionCreators';
import PageButtons from '../component/PageButtons'
import ReviewCard from '../component/ReviewCard'

class SkinCareContainer extends React.Component {


  componentDidMount() {
    // debugger
    this.props.fetchAllProducts()
  }

  
  
  render(){
    const showProducts = this.props.products.slice(this.props.startIndex, this.props.startIndex + 10) 
    const totalPagesFloat = this.props.products.length / 10 || 0
    const totalPages = Math.ceil(totalPagesFloat)
    console.log('pages', totalPages)
    return(
      <div>
        <div className='show-page'>
        {showProducts.map(product=>
          <ProductCard key={product.id} product={product}/>)}
          <br/>
        </div>
        {/* <div> */}
        <PageButtons nextIndex={this.props.nextIndex} previousIndex={this.props.previousIndex} totalPages={totalPages}/>
        {/* </div> */}
      </div>
    )
  }

}





function msp(state) {
  // console.log('mspp', state)
  return {
    products: state.products,
    startIndex: state.startIndex,
  }
}

function mdp(dispatch) {
  // console.log('mdppppp', dispatch)
  return { 
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    nextIndex: () => dispatch(nextPageCreator()),
    previousIndex: () => dispatch(previousPageCreator()) 
  }
}
export default connect(msp, mdp)(SkinCareContainer);