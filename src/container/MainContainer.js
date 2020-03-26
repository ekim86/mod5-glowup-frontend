import React from 'react';
// import NavBar from '../component/NavBar';
// import { Link } from 'react-router-dom';
import '../KBeautySteps.css'


function MainContainer(props) {
  let userName;
  if (props.currentUser) {
    userName = props.currentUser['first_name'].toUpperCase();
  } else {
    userName = null;
  }
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <h4>
        START YOUR GLOW UP SKIN CARE JOURNEY WITH US {userName}
        </h4>
      <h5>
        Skin care is an evolving personal journey and we’re here to guide you along the way.
        </h5>
      <img src='/kbeautystepscomic.jpg' style={{ width: '60%' }} />

      <div className='steps'>

<div>
The 10-Step is more than a routine—it's a lifestyle that has become a global phenomenon, grounded in Korea's cultural obsession with healthy skin and backed by decades of scientific advancement. It's not about having more products than you can count, but rather about having the right products that do the right things, and using them in the right order.
</div>

<div>
  <div className='step1'>
<img className='step-image' src="//cdn.shopify.com/s/files/1/0249/1218/t/88/assets/placeholder-makeup_small.png?v=18176140272826666781"/>
<p className='step-title'>Make Up Remover<br/> & Oil Cleanser</p>
  </div>
  <div>
  Oil cleansers are the base of the Korean skin care routine and the first step of the double cleanse. They're not only relaxing to use; as you gently massage these cleansers in, they also remove makeup and draw out other oil-based impurities, such as sebum, SPF, and pollution.
  </div>
</div>


</div>

</div>
  )
}

export default MainContainer;