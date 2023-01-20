import react from 'react'
import a from '../App.css'
import BarChart from '../Chart/barchart'
import PolarAreaChart from '../Chart/PolarAreaChart'

const Home = () => {
    return(
    <body className='home' >
            <h1 className="body">Home Page</h1>
            <h2>1.Bar Chart of my coding skill </h2>
            <div className='container' ><BarChart/></div>
            <h2>2.A Polar Area Chart for easier visualization</h2>
            <div className='container' ><PolarAreaChart/></div>
            <br></br>
            
            
            
    </body>
    )
}
export default Home;