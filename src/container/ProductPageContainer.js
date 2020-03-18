import React from 'react';
import { connect } from 'react-redux'
import { fetchProduct } from '../actionCreators'
// import ReviewCard from '../component/ReviewCard'
import ReviewContainer from './ReviewContainer'
import '../Product.css';

class ProductPageContainer extends React.Component {

  constructor(props) {
    super(props)
    console.log("PROPS", this.props)
  }

  componentDidMount() {
    // console.log('productpageprops', this.props.match)
    this.props.fetchProduct(this.props.match.params.productId)
    // this.props.fetchProduct()
    // this.reviewFetchHelper()
  }

  render() {
    console.log('props in ppc', this.props)
    return (
      <div>
        <div className='ppc-product-info'>
          <div align='left' >
            <img src={this.props.product.img_url} align='left' style={{ height: '300px' }} />
            <h4>{this.props.product.brand}</h4>
            <h5>{this.props.product.name}
              <br />
        ${this.props.product.price}</h5>
            <button>add to bag</button>
            <h6>
              Ingredients: {this.props.product.ingredients}
              <br />
        Details: {this.props.product.detail}
              <br />
        How to use: {this.props.product.how_to_use}</h6>
          </div>
        </div>
        <hr></hr>

        <ReviewContainer productId={this.props.product.id} />
        {/* Review: {console.log('REVIEWSSS', this.props.product.reviews)} */}
      </div>
    )

  }
}



function msp(state, ownProps) {
  // console.log('MSP PRODUCT PAGE CONTAINER', state)
  const productId = ownProps.match.params.productId
  return {
    // products: state.products,
    // startIndex: state.startIndex,
    productId: productId,
    product: state.product
  }
}

function mdp(dispatch) {
  // console.log('MDP PRODUCT PAGE CONTAINER', dispatch)
  return {
    // fetchProduct: (product) => dispatch(fetchProduct(product)),
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    // updateIndex: () => dispatch(nextPageCreator()) 
  }
}
export default connect(msp, mdp)(ProductPageContainer);