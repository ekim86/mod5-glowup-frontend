// import React from 'react'
// import StarRatingComponent from 'react-star-rating-component';
// import '../Review.css';
// import ReviewForm from '../component/ReviewForm'

// class ReviewCard extends React.Component{

  
//   // changeHandler(field) {
//     //   return (e) => {
//       //     this.setState({
//   //       [field]: e.target.value,
//   //       'product_id': this.props.productId
//   //     });
//   //   };
//   // }

//   handleEdit = (id) => {
//       // e.preventDefault()
//     console.log('HANDLE EDIT', )
//     // const review = Object.assign({}, this.state)
//     // this.props.postReview(review)
//     fetch(`http://localhost:4000/reviews/${ this.props.review.id}`, {
//       method: 'PATCH',
//       headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//           rating: 'new rating',
//           review: 'new review',
//       })
//   })
//   }



  
//   handleDelete = () => {
// // needs to work without refreshing
//     fetch(`http://localhost:4000/reviews/${this.props.review.id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//     })
// }

//   render(){
//     console.log('props reviewwwwcard', this.props)
//     return (

//       <div>
//       REVIEW CARD AM I USING THIS STILLLLL?
//         <div className='reviewer'>
//           {this.props.review.user.first_name}<br />
  
//           <StarRatingComponent
//             name="rate1" 
//             // editing={false}
//             starCount={5}
//             value={this.props.review.rating}
//           />
//         </div>
//           <div className='review-content'>
//             <input type='textarea' value={this.props.review.review}/>
//             <br />
//             <button className='review-update' onClick={()=>this.handleEdit(this.props.review.id)}>Update</button>
//             <button className='review-update' onClick={() => this.handleDelete(this.props.review.id)}>Delete</button>
//             <hr></hr>
//           </div>
//       </div>
//     )
//   }


// // const ReviewCard = (props) => {





// }

// export default ReviewCard