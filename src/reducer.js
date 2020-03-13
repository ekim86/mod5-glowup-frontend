let reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH PRODUCTS':
      return {...state, products: action.payload }
    default:
      return state
  }

}

export default reducer