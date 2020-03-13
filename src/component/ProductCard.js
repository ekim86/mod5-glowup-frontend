import React from 'react'

const ProductCard = (props) => {
console.log('props card', props)
  return (
    <div>
      {props.product.brand}
      {props.product.name}
      <br/>
      <img src={props.product.img_url} style={{width:'50px'}}/>
    </div>
  )

}

export default ProductCard