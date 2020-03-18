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

  handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    // this.setState({
    //   [e.target.name]: e.target.value
      //i can also use placeholder
    // })
    // console.log(this.state, 'formmmm')

    // fetch('http://localhost:4000/reviews', {
    //   method: 'POST',
    //   body: review,
    // });
  }


  render() {
    console.log('props reviewFORM', this.props)

    return (
      <div>
        Write a review
        {/* <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}> */}
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={`${this.props.review.user.first_name}`} />
          <input type="textarea" name="rating" placeholder='Rating' onChange={this.handleSubmit} />
          <input type="textarea" name="review" placeholder='Review' onChange={this.handleSubmit} />
          <button>Submit</button>
        </form>
        {/* <form>
          {this.props.review.user.first_name}
          <input type='text' placeholder='review' onChange={this.changeHandler}/>
          <textarea rows="3" maxLength="300"/>
          
          <input type='Submit'/>
        </form> */}
      </div>
    )

  }

}

export default ReviewForm