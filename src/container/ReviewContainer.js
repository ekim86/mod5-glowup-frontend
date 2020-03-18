import React from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actionCreators'
import ReviewCard from '../component/ReviewCard'
import ReviewForm from '../component/ReviewForm'
import ReviewFormTry from '../component/ReviewFormTry'

class ReviewContainer extends React.Component {

  componentDidMount() {
    this.props.fetchReviews()
  }
  
  render(){
    // console.log(this.props.products, 'whatwhat')
    let reviews = this.props.reviews.map(review => <ReviewCard key={review.id} review={review}/>)
    let reviewForm = <ReviewForm productId={this.props.productId}/>
    // let reviewForm = this.props.reviews.map(review => <ReviewFormTry key={review.id} review={review}/>)
    return(
      <div>
        Review Container
        {reviewForm}
        <hr/>
        {reviews}
      </div>
    )
  }
  
}

function msp(state) {
  console.log('mspp', state)
  return {reviews: state.reviews}
}

function mdp(dispatch) {
  console.log('mdppppp', dispatch)
  return { fetchReviews: () => dispatch(fetchReviews()) }
}
export default connect(msp, mdp)(ReviewContainer);