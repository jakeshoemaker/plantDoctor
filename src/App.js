import React, { Component } from 'react';
import Header from './components/Header/Header';
import Chart from './components/Chart/Chart'
import MoistureLevel from './components/MoistureLevel/MoistureLevel';


class App extends Component {
 render() {
    return (
      <div className='app'>
        <Header/>
        <div class="row">
          <div class="col-sm-4">
          <MoistureLevel />
          </div>
          <div class="col-sm-8">
          <Chart />
          </div>
        </div>
        
      </div>
    )
  }
}

export default App;
