let reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH PRODUCTS':
      return { ...state, products: action.payload }
    case 'FETCH REVIEWS':
      return { ...state, reviews: action.payload }
    default:
      return state
  }

}

export default reducer