import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = (props) => {

  console.log('props card', props)
  return (
    // <Link to={`${props.product.link}`}>
    <Link to={`/collections/skincare/${props.product.id}`}>
    <div className='product-card'>
      <img src={props.product.img_url} className='product-card-pic' alt={props.product.name}/>
      <br />
      <div>
      {props.product.brand}
      <br />
        {props.product.name}
      <br />
      ${props.product.price}
      </div>
    </div>
    </Link>
  )

}

export default ProductCard