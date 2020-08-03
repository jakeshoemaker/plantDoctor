/** @jsx jsx **/
import React, { Component } from 'react';
import { jsx } from 'theme-ui';
import "./MoistureLevel.css"
import axios from 'axios';


class MoistureLevel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            sensor_data: [],
            error: null
        };
    }

    getData() {
        // We're using axios instead of Fetch
        axios
          // The API we're requesting data from
          .get("http://localhost:1234/api/moisture")
          .then(res => {
              this.setState({
                  sensor_data: res.data.data,
                  isLoading: false
              });
          })
          /* Once we get a response, we'll map the API endpoints to our props
          .then(res =>
            res.data.results.map(sens_data => ({
              plant: `${sens_data.plant}`,
              moisture: `${sens_data.moisture}`,
              time: `${sens_data.time}`
            }))
          )
          
          // Let's make sure to change the loading state to display the data
          .then(sensor_data => {
            this.setState({
              sensor_data,
              isLoading: false
            });
          })
          */
          // We can still use the `.catch()` method since axios is promise-based
          .catch(error => this.setState({ error, isLoading: false }));
      }

    componentDidMount() {
        this.getData();
    }

    render() {
        const { isLoading, sensor_data } = this.state;
        return (
          <React.Fragment>
            <h2>Data: </h2>
            <div>
              {!isLoading ? (
                sensor_data.map(sens_data => {
                  const { plant, moisture, time } = sens_data;
                  return (
                    <div key={plant}>
                      <h3>{plant}</h3>
                      <p>{moisture}</p>
                      <p>{time}</p>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </React.Fragment>
        );
      }    
    
}

export default MoistureLevel

/*

            <ul>
                {this.state.items.map(item =>
                <div>
                    <li>{item.plant}</li>
                    <li>{item.moisture}</li>
                    <li>{item.time}</li>
                </div>)}
            </ul>

  state = {
    sensor_data: []
  };

  componentDidMount() {
    fetch('http://localhost:1234/api/moisture')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      this.setState({ sensor_data: data })
    })
    .catch(console.log)
  }


              <div>
                <center><h1>Moisture Level</h1></center>
                    <div className='card'>
                        <div className='card-body'>
                            <ul>
                            {this.state.data.map(data => 
                            <h5 className='card-title'> {this.state.data.plant}</h5>
                            <h6 className='card-subtitle mb-2'>{this.state.data.moisture}</h6>
                            <h6 className='card-text'>{this.state.data.time}</h6>
                            )}
                            </ul>
                        </div>
                    </div>
            </div>
  */