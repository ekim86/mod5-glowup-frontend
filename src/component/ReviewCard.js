import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import '../Review.css';


const ReviewCard = (props) => {

  console.log('props reviewwwwcard', props)

  // changeHandler(field) {
  //   return (e) => {
  //     this.setState({
  //       [field]: e.target.value,
  //       'product_id': this.props.productId
  //     });
  //   };
  // }

  // handleEdit = (e) => {
  //   e.preventDefault()
  //   console.log('HANDLE EDIT', this.props)
  //   const review = Object.assign({}, this.state)
  //   this.props.postReview(review)
  // }

  return (
    <div>
      <div className='reviewer'>
        {props.review.user.first_name}<br />

        <StarRatingComponent
          // name="rate2" 
          // editing={false}
          starCount={5}
          value={props.review.rating}
        />

        <div>
          Review: {props.review.review}
          <br />
          <button>edit</button>
          <button>delete</button>
          <hr></hr>
        </div>
      </div>
    </div>
  )

}

export default ReviewCard