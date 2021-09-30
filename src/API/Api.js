import { Card } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
// import { data } from './dummyData';
const API_KEY = process.env.REACT_APP_API_KEY;

function Api() {
    const [apiData, getApiData] = useState([{}]);

    useEffect(() => {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`;
        axios.get(url)
        .then(function(res) {
            console.log(res.data["Time Series (5min)"]);
        })
        .catch(function(error) {
            console.log(error);
        });
    }, []);

    const data = {
        "Meta Data": {
            "1. Information": "Intraday (5min) open, high, low, close prices and volume",
            "2. Symbol": "IBM",
            "3. Last Refreshed": "2021-09-29 19:35:00",
            "4. Interval": "5min",
            "5. Output Size": "Compact",
            "6. Time Zone": "US/Eastern"
        },
        "Time Series (5min)": {
            "2021-09-29 19:35:00": {
            "1. open": "139.5000",
            "2. high": "139.5000",
            "3. low": "139.5000",
            "4. close": "139.5000",
            "5. volume": "210"
            },
            "2021-09-29 17:55:00": {
            "1. open": "139.2500",
            "2. high": "139.2500",
            "3. low": "139.2401",
            "4. close": "139.2401",
            "5. volume": "295"
            },
            "2021-09-29 16:35:00": {
            "1. open": "139.2400",
            "2. high": "139.3000",
            "3. low": "139.2400",
            "4. close": "139.3000",
            "5. volume": "204"
            },
            "2021-09-29 16:10:00": {
            "1. open": "139.1800",
            "2. high": "139.1800",
            "3. low": "139.1800",
            "4. close": "139.1800",
            "5. volume": "554"
            },
        }
    };

    return (
        <Card>
            <LineChart width={1000} height={450} 
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[120, 150]}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="invested" stroke="#8884d8" />
            </LineChart>
        </Card>
    )
}

export default Api
