import React from 'react'
import '../Review.css';
import { connect } from 'react-redux'
import { postReview } from '../actionCreators'
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      review: '',
      product_id: '',
      user_id: 1
    };
  }

  changeHandler(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
        'product_id': this.props.productId
      });
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const review = Object.assign({}, this.state)
    this.props.postReview(review)
    console.log('SUBMITFORM', this.props.history)
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    console.log('props reviewFORM', this.props)

    return (
      <div>
        Write a review
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='user' placeholder='User' />
          <br/>
          <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <br/>
          {/* <input type="textarea" name="rating" placeholder='Rating 1-5' onChange={this.changeHandler('rating')} /> */}
          <input type='textarea' name="review" placeholder='Review' onChange={this.changeHandler('review')} />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )

  }

}


function msp(state) {
  console.log('mspp', state)
  return {review: state.review}
}

function mdp(dispatch) {
  console.log('mdppppp', dispatch)
  return { postReview: (review) => dispatch(postReview(review)) }
}

export default connect(msp, mdp)(ReviewForm)