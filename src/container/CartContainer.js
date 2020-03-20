import React from 'react';
import { connect } from 'react-redux'
import { fetchAllProducts } from '../actionCreators'
// import ProductPageContainer from '../container/ProductPageContainer'

class CartContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAllProducts()
  }

//   handleAddCart = (id) => {
//     // e.preventDefault()
//   console.log('ADD TO CARD', )
//   // const review = Object.assign({}, this.state)
//   // this.props.postReview(review)
//   console.log('WHAT DO I HAVE', this.props)
//   fetch(`http://localhost:4000/account/${ this.props.user.id}/cart`, {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//         rating: 'new rating',
//         review: 'new review',
//     })
// })
// }

handleAddCart = () => {

}

  render() {

    // let reviews = this.props.reviews.map(review => <ReviewCard key={review.id} review={review} />)

    return (
      <div>
        Cart Container
        {/* <ProductPageContainer/> */}
      </div>
    )
  }

}

function msp(state) {
  console.log('mspp', state)
  return { cart: state.cart }
}

function mdp(dispatch) {
  console.log('mdppppp', dispatch)
  return { 
    fetchAllProducts: () => dispatch(fetchAllProducts()),
  }
}
export default connect(msp, mdp)(CartContainer);