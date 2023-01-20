import react from 'react'
import a from '../App.css'
import PopCat from '../PopCat'
import b from '../cat/cat1.jpg'
import c from '../cat/cat2.jpg'
import d from '../cat/cat3.jpg'
import e from '../cat/cat4.jpg'
import f from '../cat/cat5.jpg'
import g from '../cat/cat6.jpg'
import h from '../cat/cat7.jpg'


const CatGarden = () => {
    return(
    <body className='home'>
    <h2 align='middle'>How do you feel today?</h2>
            <h2 align='middle'>Wanna relax with PopCat!!!?</h2>
            <div align='middle'><PopCat/></div>
            <br></br><br></br>
    <div align='middle'>
    <h2>Wait!!! Don't go awayyy </h2>
    <h2>Those cute 🐱 can really make your day!!!</h2>
    <p><img src={b} alt='pics' className='cat'/></p>
    <p><img src={c} alt='pics' className='cat'/></p>
    <p><img src={d} alt='pics' className='cat'/></p>
    <p><img src={e} alt='pics' className='cat'/></p>
    <p><img src={f} alt='pics' className='cat'/></p>
    <p><img src={g} alt='pics' className='cat'/></p>
    <p><img src={h} alt='pics' className='cat'/></p>
    </div>
    </body>
    )
}
export default CatGarden;
