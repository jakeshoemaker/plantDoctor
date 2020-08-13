
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import './Chart.css';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const options = {
      responsive: true,
      maintainAspectRatio: true,
      layout: {
          padding: {
              top: 5,
              left: 15,
              right: 15,
              bottom: 15
          }
      },
      legend: {
        labels: {
          fontColor: 'black',
          fontSize: 24
        }  
      },
      scales: {
        yAxes: [{
            ticks: {
                fontSize: 18,
                fontColor: 'black'
            }
        }],
        xAxes: [{
          ticks: {
            fontSize: 18,
            fontColor: 'black'

          }
        }]
    }
    }
  

  const paint = () => {
    const ms = [];  // moisture array to hold data
    const tm = [];  // timestamp array to hold data

    axios
      .get('http://localhost:1234/api/moisture/6hr')
      //.get('http://172.20.3.232:1234/api/moisture/6hr')
      .then(res => {
        console.log(res)
        for(var sens_data of res.data.data){
          ms.push(parseInt(sens_data.moisture))
          tm.push(sens_data.time)
        }

        for(var i = 0; i < tm.length; i++){
          if (i % 3 !== 0){
            tm[i] = ''
          }
        }

        console.log(tm)
        setChartData({
          labels: tm,
          datasets: [
            {
              label: "level of moisture",
              fontSize: 24,
              data: ms,
              backgroundColor: "rgba(8, 182, 206, 0.2)",
              borderColor: "#398AD7"
            }
          ]
        });
      })
      .catch(err => {
        console.log(err)
      })
      console.log(ms, tm)

    
  };

  useEffect(() => {
    paint()
  }, [])

  return(
    <div className="chart-container">
      <h1> moisture stats: </h1>
      <div className='graph-container'>
        <Line 
        data={chartData} 
        options={options}
        />
      </div>
    </div>
  )
}

export default Chart;


