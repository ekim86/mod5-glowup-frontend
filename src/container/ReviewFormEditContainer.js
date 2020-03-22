import { connect } from 'react-redux';
import { editReview, deleteReview } from '../actionCreators';
import ReviewFormEdit from '../component/ReviewFormEdit';

const msp = (state, ownProps) => {
  const review = ownProps.review;
  const reviewId = review.id;
  const currentUserName = ownProps.currentUserName;
  const currentUserId = ownProps.currentUserId;

  return {
    review,
    reviewId,
    currentUserId,
    currentUserName,
    form_type: "Edit Review"
  };
};

const mdp = dispatch => {
  return {
    action: (review) => dispatch(editReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id))
  }
};

export default connect(msp, mdp)(ReviewFormEdit);