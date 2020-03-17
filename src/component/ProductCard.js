import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = (props) => {



  console.log('props card', props)
  return (
    <Link to={`${props.product.link}`}>
    <div className='product-card'>
      <img src={props.product.img_url} style={{ width: '200px' }} alt={props.product.name}/>
      <br />
      {props.product.brand}
      <br />
      <div>
        {props.product.name}</div>
      <br />
      ${props.product.price}
    </div>
    </Link>
  )

}

export default ProductCard