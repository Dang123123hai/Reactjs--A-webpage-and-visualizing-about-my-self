import React from "react";
import {PolarArea} from 'react-chartjs-2'

function PolarAreaChart(){
    const pdata={
        labels:['Python','HTML','JavaScript','SQL','Tableau','JMP'],
    datasets:[
        {
            label:'Coding skills',
            data:[71,40,50,60,70,65],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(107, 255, 0)']
            
            
    }
]
}
return(
    <div>
        <PolarArea data={pdata}/>
    </div>
)
}
export default PolarAreaChart