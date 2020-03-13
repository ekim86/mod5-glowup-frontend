import React from 'react';
import NavBar from '../component/NavBar';
import { Link } from 'react-router-dom';
import SkinCareContainer from './SkinCareContainer';


function MainContainer(){  
  
  return(
    <div>
      <NavBar />
      <h1>Glow Up</h1>
      <Link to='/collection/skincare'>SkinCareContainer</Link>
    </div>
  )
}

export default MainContainer;