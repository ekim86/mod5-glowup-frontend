import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewFormNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.review.rating,
      review: this.props.review.review,
      product_id: this.props.review.product_id,
      user_id: this.props.currentUserId,
      id: this.props.reviewId
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeHandler(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
        'product_id': this.props.productId,
        'user_id': this.props.currentUserId
      });
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const review = Object.assign({}, this.state)
    this.props.action(review)
    console.log('SUBMITFORM', this.props.history)
  }

  handleDelete(e) {
    e.preventDefault();
    const { reviewId } = this.props;
    this.props.deleteReview(reviewId);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render () {
    console.log('props ReviewFormEdit', this.props)

    return (
      <div className='reviewer'>
        {this.props.review.user.first_name}
        <form> 
            <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick.bind(this)}
          />
          Review: <input
            type='textarea'
            name="review"
            placeholder='Review'
            onChange={this.changeHandler('review')}
            value={this.state.review}
          />
          <button onClick={this.handleSubmit}>Edit review</button>
          <button onClick={this.handleDelete}>Delete review</button>
        </form>
      </div>
    )
  }
}

export default ReviewFormNew;