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




export const fetchProducts = () => dispatch => {
  fetch('http://localhost:4000/products')
  .then(res => res.json())
  .then(data => {
   console.log('fetchproducts action', data)
    dispatch({type: 'FETCH PRODUCTS', payload: data})
  })
}
