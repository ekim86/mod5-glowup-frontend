import React from 'react'

const Brands = (props) => {
console.log('props brand', props)
  return (
    <div>
      brand
      {/* {props.product.brand} */}
      {/* {props.product.name} */}
      <br/>
      {/* <img src={props.product.img_url} style={{width:'50px'}}/> */}
    </div>
  )

}

export default Brands