let reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH PRODUCTS':
      return { ...state, products: action.payload }
    case 'FETCH REVIEWS':
      return { ...state, reviews: action.payload }
    case 'NEXT_PAGE':
      let nextIndex = state.startIndex + 10
      if (nextIndex >= state.products.length) { nextIndex = 0 } // this is for the page wrap around 
      return { ...state, startIndex: nextIndex }
    default:
      return state
  }

}

export default reducer



// const ReviewsReducer = (state = {}, action) => {
//   switch(action.type){
//       case RECEIVE_REVIEW:
//           return merge({}, state, {[action.review.id]: action.review});
//       case RECEIVE_ALL_REVIEWS:
//           return merge({}, action.reviews)
//       case REMOVE_REVIEW:
//           let newState = merge({}, state);
//           delete newState[action.review.id];
//           return newState;
//       default:
//       return state;
//   }
// }