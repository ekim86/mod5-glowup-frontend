import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import ReviewFormEditContainer from '../container/ReviewFormEditContainer';


class ReviewCardNew extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { review, currentUserId } = this.props;
    let reviewFormat;
    if(currentUserId && review.user.id === currentUserId) {
      reviewFormat = <ReviewFormEditContainer review={review} currentUserId={currentUserId} />
    } else {
      reviewFormat =
      <div className='reviewer'>
        
        <div className='reviewer-info'>
          {review.user.first_name}
        <br />
        <StarRatingComponent
          name='rate1'
          starCount={5}
          value={review.rating}
        />
        </div>
        <div className='reviewer-review'>
          Review: {review.review}
          </div>
      </div>
    }

    return (
      <div>
        {reviewFormat}
      </div>
    )
  }
}

export default ReviewCardNew;