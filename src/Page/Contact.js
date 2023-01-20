import React from 'react'
import a from '../App.css'
import b from '../socialicon/facebook.png'
import c from '../socialicon/linkedin.png'
import d from '../socialicon/instagram.png'
import Form from '../Form'
const Contact = () => (
  
    <div align="center">
    <body className='home'>
    <h1 className="body">Share your opinion with me!!!!</h1>
    <Form/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <a href="https://www.facebook.com/profile.php?id=100025158670940" ><img className='logoSN' src={b} alt="logo" /></a>&ensp;&ensp;
    <a href="https://www.instagram.com/haii_dang_0421/" ><img className='logoSN' src={d} alt="logo" /></a>&ensp;&ensp;
    <a href='https://www.linkedin.com/in/dang-hai-luong-7a93a6134/' ><img className='logoSN' src={c} alt="logo" /></a>
    </body>
    
    </div>
);
export default Contact;