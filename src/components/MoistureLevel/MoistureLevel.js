/** @jsx jsx **/
import React from 'react';
import { jsx } from 'theme-ui';
import "./MoistureLevel.css"


const MoistureLevel = ({ sensor_data }) => {
    return (
        <div>
            <center><h1>Moisture Level</h1></center>
            {sensor_data.map((data) => (
                <div class='card'>
                    <div class='card-body'>
                        <h5 class='card-title'> {data.plant}</h5>
                        <h6 class='card-subtitle mb-2'>{data.moisture}</h6>
                        <h6 class='card-text'>{data.time}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MoistureLevel
