/** @jsx jsx **/
import React from 'react';
import { jsx } from 'theme-ui';
import "./MoistureLevel.css"

class MoistureLevel extends React.Component {
    componentDidMount() {
        const apiUrl = 'http://localhost:1234/api/moisture';
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => console.log('This is your data', data));
    }
    render() {
        return <h1> my component has mounted, check the console</h1>;
    }
}


export default MoistureLevel;