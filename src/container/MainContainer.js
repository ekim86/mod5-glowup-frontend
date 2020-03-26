import React from 'react';
// import NavBar from '../component/NavBar';
// import { Link } from 'react-router-dom';
// import '../KBeautySteps.css'


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


</div>
  )
}

export default MainContainer;