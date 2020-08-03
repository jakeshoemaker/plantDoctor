import React, {Component} from 'react';
import Header from './components/Header/Header';
import MoistureLevel from './components/MoistureLevel/MoistureLevel';


class App extends Component {

  state = {
    sensor_data: []
  };

  componentDidMount() {
    fetch('http://172.20.3.232:1234/api/moisture')
    .then(res => res.json())
    .then((data) => {
      console.log("got th data")
      this.setState({ sensor_data: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <Header/>
        <MoistureLevel sensor_data={this.state.sensor_data}/>
      </div>
    );
  }
}

export default App;
