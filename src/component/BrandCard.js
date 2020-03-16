import React from 'react'


const BrandCard = (props) => {
// console.log('props brandcard', props)


let productz = props.product.brand


return (
  <div className='product-card'>
        {productz}
      </div>
    )


}

export default BrandCard