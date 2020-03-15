import React from 'react'


const ProductCard = (props) => {
console.log('props card', props)
  return (
    <div className='product-card'>
      <img src={props.product.img_url} style={{width:'200px'}}/>
      <br/>
      {props.product.brand}
      <br/>
      <div>
      {props.product.name}</div>
      <br/>
      ${props.product.price}
    </div>
  )

}

export default ProductCard