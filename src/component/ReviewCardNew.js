import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewCardNew extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const { review } = this.props;
    this.props.deleteReview(review.id);
  }

  render() {
    const { review, currentUserId } = this.props;
    let deleteButton = null;
    let reviewFormat = review.review;
    if(currentUserId && review.userId === currentUserId) {
      // reviewFormat = <button>Edit Review
      //     {/* if edit on click review edit form */}
      //     {/* or edit will be the edit review form already */}
      // </button>;
      deleteButton = <button className="delete" onClick={this.handleDelete}>
        Delete Review
        </button>;
    }

    return (
      <div>
        <div className='reviewer'>
          {review.user.first_name}
          <br />

          <StarRatingComponent
            name='rate1'
            starCount={5}
            value={review.rating}
          />
          <div>
            Review: {reviewFormat}
          </div>
          <div>
            {deleteButton}
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewCardNew;