import React, { PureComponent, Fragment,} from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import axios from 'axios';




export default class SalesTopProfitProducts extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';
 
  state = {
    info: []

  };

  componentDidMount() {
    axios.get('http://localhost:9000/api/topProfitProducts')
    .then(response => {
      const newData = response.data;
      this.setState({
        info: newData
      });
    })
  }

  render() {
    return (
              <BarChart
                width={700}
                height={300}
                data={this.state.info}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
                barSize={20}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis /> 
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="totalProd" name="Total de ganancias" fill="#2A6A9E" background={{ fill: '#eee' }} />
              </BarChart>
    );
  }
}