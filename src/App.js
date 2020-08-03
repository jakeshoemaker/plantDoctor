import React, { Component } from 'react';
import Header from './components/Header/Header';
import MoistureLevel from './components/MoistureLevel/MoistureLevel';


class App extends Component {
 render() {
    return (
      <div className='app'>
        <Header/>
        <MoistureLevel />
      </div>
    )
  }
}

export default App;
