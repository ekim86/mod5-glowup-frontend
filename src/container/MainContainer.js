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
      <h2>Time to Glow Up {userName}</h2>
      <img src='/kbeautystepscomic.jpg' style={{width: '40%'}}/>

    </div>
  )
}

export default MainContainer;