import { connect } from 'react-redux';
import { postReview } from '../actionCreators';
import ReviewFormNew from '../component/ReviewFormNew';

const msp = (state, ownProps) => {
  const review = {review: '', rating: 0};
  const reviewId = null;

  return {
    review,
    reviewId,
    form_type: "Post Review"
  };
};

const mdp = dispatch => {
  return {
    action: (review) => dispatch(postReview(review))
  }
};

export default connect(msp, mdp)(ReviewFormNew);