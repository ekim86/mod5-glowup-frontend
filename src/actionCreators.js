// function fetchProducts() {
//   return function (dispatch) {
// console.log('dispatchhh',dispatch)
//     fetch('http://localhost:4000/products')
//       .then(resp => resp.json())
//       .then((data) => {
//         console.log('fetchproducts action', data)
//         dispatch({ type: 'FETCH PRODUCTS', payload: data })
//       }
//       )
//   }
// }

// export { fetchProducts }

export const nextPageCreator = () => ( {type: 'NEXT_PAGE'} )

export const fetchProducts = () => dispatch => {
  fetch('http://localhost:4000/products')
  .then(res => res.json())
  .then(data => {
   console.log('fetchproducts action', data)
    dispatch({type: 'FETCH PRODUCTS', payload: data})
  })
}

export const fetchReviews = () => dispatch => {
  fetch('http://localhost:4000/reviews')
  .then(res => res.json())
  .then(data => {
   console.log('fetchreview action', data)
    dispatch({type: 'FETCH REVIEWS', payload: data})
  })
}

// export const createReview = () => dispatch => {
//   fetch(`http://localhost:4000/reviews/${id}`, {
//     method: 'post',
//     body: JSON.stringify(opts)

// }

// export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
// export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
// export const REMOVE_REVIEW = "REMOVE_REVIEW";
// export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

// export const receiveReview = (review) => {
//     return {
//         type: RECEIVE_REVIEW,
//         review
//     }
// }

// const receiveAllReviews = (reviews) => {
//     return {
//         type: RECEIVE_ALL_REVIEWS,
//         reviews
//     }
// }
// const removeReview = (review) => {
//     return {
//         type: REMOVE_REVIEW,
//         review,
//     }
// }

// const receiveReviewErrors = (errors) => {
//     return {
//         type: RECEIVE_REVIEW_ERRORS,
//         errors
//     }
// }

// export const createReview = (review) => dispatch => {
//     return ReviewAPIUtil.createReview(review).then( (review) => {
//         return dispatch(receiveReview(review))
//     }, (errors) => {
//         return dispatch(receiveReviewErrors(errors.responseJSON))
//     })
// }

// export const deleteReview = (review) => dispatch => {
//     return ReviewAPIUtil.deleteReview(review).then( (review) => {
//         return dispatch(removeReview(review))
//     }, (errors) => {
//         return dispatch(receiveReviewErrors(errors.responseJSON))
//     })
// }

// export const fetchProductReviews = (product_id) => dispatch => {
//     return ReviewAPIUtil.fetchProductReviews(product_id).then( (reviews) => {
//         return dispatch(receiveAllReviews(reviews))
//     }, (errors) => {
//         return dispatch(receiveReviewErrors(errors.responseJSON))
//     })
// }
// export const fetchAllReviews = () => dispatch => {
//     return ReviewAPIUtil.fetchAllReviews().then( (reviews) => {
//         return dispatch(receiveAllReviews(reviews))
//     }, (errors) => {
//         return dispatch(receiveReviewErrors(errors.responseJSON))
//     })
// }

// export const updateReview = (review) => dispatch => {
//     return ReviewAPIUtil.updateReview(review).then( (review) => {
//         return dispatch(receiveReview(review))
//     }, (errors) => {
//         return dispatch(receiveReviewErrors(errors.responseJSON))
//     })
// }