
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import './Chart.css';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const options = {
    responsive: true,
  };

  const paint = () => {
    let ms = [];  // moisture array to hold data
    let tm = [];  // timestamp array to hold data

    axios
      .get('http://172.20.3.232:1234/api/moisture/6hr')
      .then(res => {
        console.log(res)
        for(const sens_data of res.data.data){
          ms.push(parseInt(sens_data.moisture))
          tm.push(sens_data.time)
        }
        setChartData({
          labels: tm,
          datasets: [
            {
              label: "level of moisture",
              data: ms,
              backgroundColor: 'rgba(75,192,192,0.6)',
              borderwidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err)
      })
      //console.log(ms, tm)

    
  };

  useEffect(() => {
    paint()
  }, [])

  return(
    <div>
      <h1> statistics </h1>
      <div className='chart'>
        <Line data={chartData} options={options}/>
      </div>
    </div>
  )
}

export default Chart;


