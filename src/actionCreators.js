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

export const fetchAllProducts = () => dispatch => {
  fetch('http://localhost:4000/products')
  .then(res => res.json())
  .then(data => {
   console.log('fetchALLproducts action', data)
    dispatch({type: 'FETCH ALL PRODUCTS', payload: data})
  })
}

// export const fetchProduct = (product) => dispatch => {
export const fetchProduct = () => dispatch => {
  // debugger
  // fetch(`http://localhost:4000/products/${product}`)
  fetch('http://localhost:4000/products/1')
  .then(res => res.json())
  .then(data => {
   console.log('fetchONEproductid ACTIONNNN', data)
    dispatch({type: 'FETCH PRODUCT', payload: data})
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