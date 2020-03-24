
let reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH ALL PRODUCTS':
      return { ...state, products: action.payload }
    case 'FETCH PRODUCT':
      return { ...state, product: action.payload.product }
    case 'FETCH REVIEWS':
      return { ...state, reviews: action.payload }
    case 'POST REVIEW':
      return { ...state, review: action.payload.review }
    case 'EDIT REVIEW':
      return { ...state, review: action.payload.review }
    case 'DELETE REVIEW':
      return { ...state, review: action.payload.review }
    case 'FETCH ALL CARTS':
      return { ...state, carts: action.payload.carts }
    case 'FETCH CART':
      // debugger
      return { ...state, cart: action.payload.cart }
    case 'CREATE CART':  
      return { ...state, openCart: action.payload.cart }
    case 'CLOSE CART':
      return { ...state, openCart: action.payload.cart }
    case 'ADD TO CART':
      return { ...state, cart: action.payload.cart, cartItem: action.payload.cartItem}
    case 'EDIT CART ITEM':
      return { ...state, cartItem: action.payload.cartItem}
    case 'FETCH CART ITEMS':
      return { ...state, currentCartItems: action.payload}
    // case 'CLOSE CART':
    //   // debugger
    //   return { ...state, currentCartItems: action.payload}
    case 'NEXT_PAGE':
      let nextIndex = state.startIndex + 10
      return { ...state, startIndex: nextIndex }
    case 'PREVIOUS_PAGE':
      let previousIndex = state.startIndex - 10
      if (previousIndex < 0) { previousIndex = 0 }
      return { ...state, startIndex: previousIndex }
    default:
      return state
  }

}

export default reducer;
