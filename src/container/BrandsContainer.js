import React from 'react'
import '../Product.css';
import { connect } from 'react-redux'
import { fetchProducts } from '../actionCreators'
import BrandCard from '../component/BrandCard'

class BrandsContainer extends React.Component {

  componentDidMount() {
    // debugger
    this.props.fetchProducts()
  }
render(){


  const product_brands = this.props.products.map(product => <BrandCard key={product.id} product={product}/>)
  
    return (
      <div>
        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z #
        {/* <a class='brand-index-links smoothScroll' href='javascript:;' data-scroll-to='o'>O</a> */}
        {/* <a class='brand-index-links smoothScroll  disabled' href='javascript:;' data-scroll-to='q'>Q</a> */}
        {product_brands}
  
        <div>
          <div className='brand-index-content__wrapper'>
          <div className='brand-index-row' data-scroll-target='a'>
          <div className='brand-index=title'>
          <h4 id='a'>A</h4>
          
          
          <ul className='brand-index-item__wrapper'>
          
          <li className='brand-index-item'>
          <a className='brand-index-item-title' href='/collections/apieu'>
          A'pieu
          </a>
          </li>
          
          </ul>
          
          </div>
          </div>
          </div>
        </div>
      </div>
    )
}

}


function msp(state) {
  console.log('mspp', state)
  return {products: state.products}
}

function mdp(dispatch) {
  console.log('mdppppp', dispatch)
  return { fetchProducts: () => dispatch(fetchProducts()) }
}
export default connect(msp, mdp)(BrandsContainer);