
let reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH ALL PRODUCTS':
      return { ...state, products: action.payload }
    case 'FETCH PRODUCT':
      return { ...state, product: action.payload.product }
    case 'FETCH REVIEWS':
      return { ...state, reviews: action.payload }
    case 'POST REVIEW':
      return { review: action.payload, ...state }
    case 'NEXT_PAGE':
      let nextIndex = state.startIndex + 10
      if (nextIndex >= state.products.length) { nextIndex = 0 } // this is for the page wrap around 
      return { ...state, startIndex: nextIndex }
    default:
      return state
  }

}

export default reducer
