import { Card } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
import { data } from './dummyData';
const API_KEY = process.env.REACT_APP_API_KEY;

function Api() {
    
    const [apiData, getApiData] = useState([{}]);

    useEffect(() => {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`;
        axios.get(url)
        .then(function(res) {
            getApiData(res);
            console.log(apiData.data["Time Series (5min)"]);
        })
        .catch(function(error) {
            console.log(error);
        });
    }, []);

    return (
        <Card >
            <LineChart width={730} height={450} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[135, 139.27]}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="invested" stroke="#8884d8" />
            </LineChart>
        </Card>
    )
}

export default Api
