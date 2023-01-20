import React from 'react';
import {Link} from 'react-router-dom';
import App from "./App.css"
import a from './logoweb.png'
import  Music from './Music/Music'



const HeaderPage = () =>{
  return(
    <div >
      <header>
      <div className='headerColor'>
      <a href="/home"><img className='logo' src={a} alt="logo" /></a>
      <Music/>
        
        <ul className="nav">
          <li><Link to='/home' style={{textDecoration:'none'}}  ><h3 className='link'  >Home</h3></Link></li>
          <li><Link to='/about' style={{textDecoration:'none'}} ><h3 className='link'>About Me</h3></Link></li>
          <li><Link to='/contact' style={{textDecoration:'none'}}  ><h3 className='link'>Contact Me</h3></Link></li>
          <li><Link to='/catgarden' style={{textDecoration:'none'}} ><h3 className='link'>Cat Garden</h3></Link></li>
        </ul>
       
        </div>
       
       
        <br></br>
        
        <div class="footer">
         <p>Created by @Dang Luong with 🧡💚💛💙💜🤎</p>
        </div>
        </header>
    </div>
  )
}
export default HeaderPage
