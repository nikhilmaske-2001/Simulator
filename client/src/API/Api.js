import { Card } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const API_KEY = process.env.REACT_APP_API_KEY;

function Api() {
  const [graphData, setGraphData] = useState([{}]);

  useEffect(() => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`;
    axios
      .get(url)
      .then(function (res) {
        Object.keys(res.data["Time Series (5min)"]).map((i) => {
          var obj = {
            name: (2021 + i).toString(),
            invested: res.data["Time Series (5min)"][i]["1. open"],
          };
          setGraphData((graphData) => [...graphData, obj]);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Card>
      <LineChart
        width={1000}
        height={450}
        data={graphData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[130, 150]} />
        <Tooltip />
        <Legend />
        <Line dataKey="invested" stroke="#8884d8" dot={false} />
      </LineChart>
    </Card>
  );
}

export default Api;
