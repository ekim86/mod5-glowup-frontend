import React from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actionCreators'
import ReviewCard from '../component/ReviewCard'
import ReviewForm from '../component/ReviewForm'
import ReviewFormTry from '../component/ReviewFormTry'
import '../Review.css';

class ReviewContainer extends React.Component {

  componentDidMount() {
    this.props.fetchReviews()
  }

  handleEdit = (id) => {
    // e.preventDefault()
    console.log('HANDLE EDIT from REVIEW')
    // const review = Object.assign({}, this.state)
    // this.props.postReview(review)
    fetch(`http://localhost:4000/reviews/${this.props.review.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        rating: 'new rating',
        review: 'new review',
      })
    })
  }

  render() {
    // console.log(this.props.products, 'whatwhat')
    let reviews = this.props.reviews.map(review => <ReviewCard key={review.id} review={review} />)
    let reviewForm = <ReviewForm key={this.props.productId} productId={this.props.productId} />
    // let reviewForm = this.props.reviews.map(review => <ReviewFormTry key={review.id} review={review}/>)
    return (
      <div>
        Review Container
        {reviewForm}
        {/* <ReviewForm key={this.props.productId} productId={this.props.productId} onClick={this.handleEdit}/> */}
        <hr />
        {reviews}
        {/* <ReviewCard/> */}
      </div>
    )
  }

}

function msp(state) {
  console.log('mspp', state)
  // debugger
  return { reviews: state.reviews }
}

function mdp(dispatch) {
  console.log('mdppppp', dispatch)
  return { fetchReviews: () => dispatch(fetchReviews()) }
}
export default connect(msp, mdp)(ReviewContainer);