import React from 'react'
import '../Review.css';

class ReviewForm extends React.Component {
  
  changeHandler = (e) => {
    let value = e.target.value
    this.setState({
      value: value
    })
    console.log(this.setState, 'stateee')
  }
  render(){
    console.log('props reviewFORM', this.props)

  return (
      <div>
        ReviewForm
        <form>
          {this.props.review.user.first_name}
          <input type='text' placeholder='review' onChange={this.changeHandler}/>
          <textarea rows="3" maxLength="300"/>
          
          <input type='Submit'/>
        </form>
      </div>
    )

}

}

export default ReviewForm