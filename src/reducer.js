
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
    case 'ADD_TO_CART':
      //INSIDE HOME COMPONENT
      if (action.type === 'ADD_TO_CART') {
        let addedItem = state.cart_items.find(cart_item => cart_item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(cart_item => action.id === cart_item.id)
        if (existed_item) {
          addedItem.quantity += 1
          return {
            ...state,
            total: state.total + addedItem.price
          }
        }
        else {
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price

          return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: newTotal
          }
        }
      }
      else {
        return { ...state, cart: action.payload }
      }

    case 'NEXT_PAGE':
      let nextIndex = state.startIndex + 10
      if (nextIndex >= state.products.length) { nextIndex = 0 }
      return { ...state, startIndex: nextIndex }
    case 'PREVIOUS_PAGE':
      let previousIndex = state.startIndex - 10
      if (previousIndex <= state.products.length) { previousIndex = 0 }
      return { ...state, startIndex: previousIndex }
    default:
      return state
  }

}

export default reducer;
