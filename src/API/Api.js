import axios from 'axios';
import React, { useEffect, useState } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;

function Api() {
    
    const [apiData, getApiData] = useState({});

    useEffect(() => {
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`;
        axios.get(url)
        .then(function(res) {
            console.log(res);
            getApiData(res.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Api
