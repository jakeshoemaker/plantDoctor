import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './Chart.css';
import axios from 'axios';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            labels: [],
            datasets: [
                {
                    label: 'Moisture over time',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderWidth: 2,
                    data: []
                }
            ],
            error: null
        };
    }

    getData() {
        axios
          // The API endpoint
          .get('http://172.20.3.232:1234/api/moisture/6hr')
          //.get"http://localhost:1234/api/moisture")
           //Once we get a response, map the API endpoints to our props
          .then(res =>
            res.data.data.map(sens_data => ({
              plant: sens_data.plant,
              moisture: sens_data.moisture,
              time: sens_data.time
            }))
          )
          const newState = Object.assign({}, this.state, {
              labels: time,
              data: moisture,
              isLoading: false
          })

          this.setState(newState);
      }

    componentDidMount() {
        this.getData();
    }


    render() {
      return(
        <div>
            <Line
                data={this.props.mpisture}
                options={{
                  title:{
                    display: true,
                    text:'Health statistics',
                    fontSize: 20
                },
                  legend:{
                    display: true,
                    position: 'right'
                }
                }}    
              />
        </div>
      );
    }
}




export default Chart