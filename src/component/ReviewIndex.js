import React from 'react';
import { connect } from 'react-redux';
import ReviewCardNew from './ReviewCardNew';
import { deleteReview, editReview } from '../actionCreators'

class ReviewIndex extends React.Component {

  render() {
    const { reviews, currentUserId } = this.props;

    const reviewCards = reviews.map((review, idx) => {
      return <ReviewCardNew review={review}
      key={idx}
      currentUserId={currentUserId}
      deleteReview={this.props.deleteReview}
      editReview={this.props.editReview}
      />
    });

    return (
      <div className="review-index-container">
        <ul className="review-index-list">
          {reviewCards}
        </ul>
      </div>
    )
  }
}

function msp(state, ownProps) {
  const productId = ownProps.productId;
  const reviews = state.reviews;
  return {
    productId,
    reviews
  }
}

function mdp(dispatch) {
  return {
    deleteReview: (id) => dispatch(deleteReview(id)),
    editReview: (id) => dispatch(editReview(id))
  }
}

export default connect(msp, mdp)(ReviewIndex);