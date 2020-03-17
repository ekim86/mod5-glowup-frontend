import React from 'react'
import '../Review.css';

const ReviewForm = (props) => {
console.log('props reviewFORM', props)
  return (
    <div>
      ReviewForm
      <form>
        {props.review.user.first_name}
        <input type='text' placeholder='review'/>
        <textarea rows="3" maxLength="300"/>
        
        <input type='Submit'/>
      </form>
    </div>
  )

}

export default ReviewForm