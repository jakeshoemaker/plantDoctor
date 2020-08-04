/** @jsx jsx **/
import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { jsx } from 'theme-ui';
import "./Chart.css"
import axios from 'axios';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            sensor_data: [],
            error: null
        };
    }
}

export default Chart