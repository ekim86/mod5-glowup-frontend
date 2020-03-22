import React from 'react';
// import NavBar from '../component/NavBar';
// import { Link } from 'react-router-dom';


function MainContainer(props){  
  let userName;
  if (props.currentUser) {
    userName = props.currentUser['first_name'];
  } else {
    userName = null;
  }
  return(
    <div>
      {/* <NavBar /> */}
      <h1>Glow Up</h1>
      hellohellllo
      <h2>{userName}</h2>
    </div>
  )
}

export default MainContainer;