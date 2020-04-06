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
const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
const parseData = response => response.json();
const url = 'https://glowup-backend.herokuapp.com/'
export const nextPageCreator = () => ( {type: 'NEXT_PAGE'} )
export const previousPageCreator = () => ( {type: 'PREVIOUS_PAGE'} )

// export const addToCart = (id) => ( {type: 'ADD_TO_CART'} )

// export const addToCart= (id)=> dispatch => {
//   return{
//       type: 'ADD_TO_CART',
//        id }
//   }

export const fetchAllProducts = () => dispatch => {
  fetch(`${url}/products`)
  .then(res => res.json())
  .then(data => {
   console.log('fetchALLproducts action', data)
    dispatch({type: 'FETCH ALL PRODUCTS', payload: data})
  })
}

export const fetchProduct = (id) => dispatch => {
  fetch(`${url}/products/${id}`)
  .then(res => res.json())
  .then(data => {
   console.log('fetchONEproductid ACTIONNNN', data)
    dispatch({type: 'FETCH PRODUCT', payload: data})
  })
}

export const fetchReviews = (productId) => dispatch => {
  fetch(`${url}/products/${productId}/reviews`)
  .then(res => res.json())
  .then(data => {
   console.log('fetchreview action', data)
    dispatch({type: 'FETCH REVIEWS', payload: data})
  })
}

export const postReview = (review) => dispatch => {
  // debugger
  fetch(`${url}/reviews/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({review})
  }).then(res => res.json())
  .then(data => {
    dispatch({type: 'POST REVIEW', payload: data})
  })
  
}

export const editReview = (review) => dispatch => {
  fetch(`${url}/reviews/${review.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({review})
  }).then(res => res.json())
  .then(data => {
    dispatch({type: 'EDIT REVIEW', payload: data})
  })
  
}


export const deleteReview = (reviewId) => dispatch => {
  // debugger
  fetch(`${url}/reviews/${reviewId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({reviewId})
  }).then(res => res.json())
  .then(data => {
    dispatch({type: 'DELETE REVIEW', payload: data})
  })
}

// export function deleteReview(reviewId) {
// 	return(dispatch) =>{
// 		fetch(`http://localhost:4000/reviews/${reviewId}`, {method: 'DELETE'})
// 		.then(resp => resp.json())
// 		.then(review => dispatch({type: 'DELETE_REVIEW', review}))
// 	}
// }



export const fetchAllCarts = (userId) => dispatch => {
  fetch(`${url}/users/${userId}/carts`)
  .then(parseData)
  .then(data => {
    dispatch({ type: 'FETCH ALL CARTS', payload: data })
  })
}

export const fetchCart = (cartId, userId) => dispatch => {
  fetch(`${url}/users/${userId}/carts/${cartId}`)
  .then(parseData)
  .then(data => {
    dispatch({ type: 'FETCH CART', payload: data })
  })
}

export const createCart = (cart) => dispatch => {
  if (cart.user_id) {
    fetch(`${url}/users/${cart.user_id}/carts/`, {
      method: 'POST',
      headers,
      body: JSON.stringify({cart})
    })
    .then(parseData)
    .then(data => {
      dispatch({ type: 'CREATE CART', payload: data })
    })
  }
}

export const closeCart = (cartId, userId) => dispatch => {
  fetch(`${url}/users/${userId}/carts/${cartId}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({cartId})
  }).then(parseData)
  .then(data => {
    dispatch({ type: 'CLOSE CART', payload: data })
  })
}

export const addToCart = (cartItem, userId) => dispatch => {
  fetch(`${url}/users/${userId}/carts/${cartItem.cart_id}/cart_items`, {
    method: 'POST',
    headers,
    body: JSON.stringify({cartItem})
  }).then(parseData)
  .then(data => {
    dispatch({ type: 'ADD TO CART', payload: data})
  })
}

export const editCartItem = (cartItem, userId) => dispatch => {
  fetch(`${url}/users/${userId}/carts/${cartItem.cart_id}/cart_items/${cartItem.id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({cartItem})
  }).then(parseData)
  .then(data => {
    dispatch({ type: 'EDIT CART ITEM', payload: data})
  })
}

export const removeCartItem = (cartItem, userId) => dispatch => {
  fetch(`${url}/users/${userId}/carts/${cartItem.cart_id}/cart_items/${cartItem.id}`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify({cartItem})
  }).then(parseData)
  .then(data => {
    dispatch({ type: 'REMOVE CART ITEM', payload: data })
  })
}

// export const removeCartItem = (cartItem, userId) => dispatch => {
//   // debugger
//   fetch(`http://localhost:4000/users/${userId}/carts/${cartItem.cart_id}/cart_items/${cartItem.id}`, {
//     method: 'DELETE',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({cartItem})
//   }).then(res => res.json())
//   .then(data => {
//     dispatch({type: 'REMOVE CART ITEM', payload: data})
//   })
// }




export const fetchCartItems = (cartId, userId) => dispatch => {
  fetch(`${url}/users/${userId}/carts/${cartId}/cart_items`)
  .then(parseData)
  .then(data => {
    dispatch({ type: 'FETCH CART ITEMS', payload: data })
  })
}
