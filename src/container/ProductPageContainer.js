import React from 'react';
import { connect } from 'react-redux'
import { fetchProduct } from '../actionCreators'
// import ReviewCard from '../component/ReviewCard'
import ReviewContainer from './ReviewContainer'

class ProductPageContainer extends React.Component{

  componentDidMount() {
    // this.props.fetchProductId(this.props.match.params.productId)
    this.props.fetchProduct()
    console.log('what cdm',this.props.fetchProduct)
}

  
  

render(){
    console.log('props in ppc', this.props.product.review)
    return(
      <div>
        Product Page Container
        {/* {this.props.product.review} */}
        <ReviewContainer/>
      </div>
    )

  }  
}



function msp(state) {
  // console.log('MSP PRODUCT PAGE CONTAINER', state)
  return {
    // products: state.products,
    // startIndex: state.startIndex,
    product: state.product
  }
}

function mdp(dispatch) {
  // console.log('MDP PRODUCT PAGE CONTAINER', dispatch)
  return { 
    // fetchProduct: (product) => dispatch(fetchProduct(product)),
    fetchProduct: () => dispatch(fetchProduct()),
    // updateIndex: () => dispatch(nextPageCreator()) 
  }
}
export default connect(msp, mdp)(ProductPageContainer);