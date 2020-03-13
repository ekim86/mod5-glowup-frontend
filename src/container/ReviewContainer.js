import React from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actionCreators'
import ReviewCard from '../component/ReviewCard'

class ReviewContainer extends React.Component {


  componentDidMount() {
    this.props.fetchReviews()
  }
  
  render(){
    // console.log(this.props.products, 'whatwhat')
    let reviews = this.props.reviews.map(review => <ReviewCard key={review.id} review={review}/>)
    return(
      <div>
        Review Container
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