import { Link } from 'react-router-dom'
import a from '../App.css'
import b from '../socialicon/facebook.png'
import c from '../socialicon/linkedin.png'
import d from '../socialicon/instagram.png'
import e from '../slidePics/Traveling.jpg'
import f from '../slidePics/Traveling2.jpg'
import g from '../slidePics/Traveling3.jpg'
import h from '../slidePics/Traveling4.jpg'
const About = () => {
    return(
        <div>
            <body className='home'>
            <h1 className="body">About Me</h1>
            <h2>1.Personal Information</h2>
            <p>I'm Dang Luong. I'm from Viet Nam. I'm 19 years old. I'm curently studying Bachelor of Data Science at SP Jain School of Global Management.</p>
            <h2>2.My Hobbies</h2>
            <p>Travelling 🚢, Cooking👨‍🍳, Eating 🍴, Playing Piano 🎹 and Playing Games🎮</p>
            <p>My dream that one day, I can travel around the world and try every food of every country!!!.</p>
            <p align='middle' >
                <div id="slideshow">
                    <div class="slide-wrapper">
                        <div class="slide"><img src={e} alt='pics' /></div>
                        <div class="slide"><img src={f} alt='pics' /></div>
                        <div class="slide"><img src={g} alt='pics' /></div>
                        <div class="slide"><img src={h} alt='pics' className='slidePics'/></div>
                        <div class="slide"><img src={e} alt='pics' /></div>
                    </div>
                </div>
            </p> 
  
           <h2>3. Skills and Endorsements</h2>
           <ul>
               <li>Tableau</li>
               <li>JMP</li>
               <li>English</li>
               <li>SQL</li>
               <li>Python
                   <ul className="ulsize"><li>Pandas</li>
                   <li>Numpy</li>
                   <li>Scikit-Learn</li>
                   <li>Seaborn</li>
                   <li>MathplotLib</li></ul>
               </li>
               <li>A more visulized way to observe my skill. Click      <Link to='/home' style={{color:'green'}}>here!</Link></li>
           </ul>
           <h2>4.Education</h2>
           <ul>
               <li>2015-2017: Nguyen Hong Le Secondary School</li>
               <li>2017-2020: Lam Son Gifted High School</li>
               <li>2020-current: SP Jain Global School of Management</li>
               </ul>
            <h2></h2>
            <h2>5.My Info</h2>
            <ul>
                <li>Phone number: (+84)945213212</li>
                <li>Email: dang.bs20dsy034@spjain.org</li>
                <br></br>
                <a href="https://www.facebook.com/profile.php?id=100025158670940" ><img className='logoSN' src={b} alt="logo" /></a>&ensp;&ensp;
                <a href="https://www.instagram.com/haii_dang_0421/" ><img className='logoSN' src={d} alt="logo" /></a>&ensp;&ensp;
                <a href='https://www.linkedin.com/in/dang-hai-luong-7a93a6134/' ><img className='logoSN' src={c} alt="logo" /></a>
            </ul>
            <h2>6.Background information</h2>
            <p>For this porject, I have used those libraries:</p>
            <ul>
                <li>React-router-dom</li>
                <li>React-chartjs-2</li>
            </ul>
            </body>
        </div>
    )
}
export default About;