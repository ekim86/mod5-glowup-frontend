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