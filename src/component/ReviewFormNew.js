import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewFormNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.review.rating,
      review: this.props.review.review,
      product_id: this.props.productId,
      user_id: this.props.currentUserId
    };
  }

  render () {
    console.log('props ReviewFormNew', this.props)

    return (
      <div>
        ReviewFormNew
        Write a review
        <form>

        </form>
      </div>
    )
  }
}

export default ReviewFormNew;