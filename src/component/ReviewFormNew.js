import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../Review.css'

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

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    console.log('props ReviewFormNew', this.props)
    const userName = this.props.currentUserName.toUpperCase()

    return (
      <div>
        {userName}, Write a Review
        <form onSubmit={this.handleSubmit}>
          {/* <label>User: {this.props.currentUserName} </label> */}
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick.bind(this)}
          />
          {/* <input type="textarea" name="rating" placeholder='Rating 1-5' onChange={this.changeHandler('rating')} /> */}
          <br/>
          <textarea className='write-review' type='textarea' name="review" placeholder='Review' onChange={this.changeHandler('review')} />
          <br />
          <button>Submit</button>
          <hr/>
        </form>
      </div>
    )
  }
}

export default ReviewFormNew;