import React, {Component} from 'react';
import Header from './components/Header/Header';
import MoistureLevel from './components/MoistureLevel/MoistureLevel';


class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <MoistureLevel />
      </div>
      //<Container>
        //  <Navbar expand="lg" variant="light" bg="light">
          //  <Navbar.Brand href="#">Plant Donctor</Navbar.Brand>
          //</Navbar>
      //</Container>
    );
  }
}

export default App;
