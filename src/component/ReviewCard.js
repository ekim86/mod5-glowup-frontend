import React from 'react'

const ReviewCard = (props) => {
console.log('props reviewwwwcard', props)
  return (
    <div>
      {props.review.user.first_name}
      <br/>
      Rating: {props.review.rating}
      <br/>
      Review: {props.review.review}
      <hr></hr>
    </div>
  )

}

export default ReviewCard