import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

import axios from 'axios';


export default class SalesPerDayDeliv extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';
 
  state = {
    info: []

  };


  componentDidMount() {
    axios.get('http://localhost:9000/api/salesPerDayDeliv')
    .then(response => {
      const newData = response.data;
      this.setState({
        info: newData
      });
    })
  }

  render() {
    return (
      <ComposedChart
        width={700}
        height={400}
        data={this.state.info}
        margin={{
          top: 20, right: 20, bottom: 20, left: 25,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="num" name="Cantida de Productos" barSize={20} fill="#2A6A9E" />
        <Line type="monotone" name="Linea de ventas" dataKey="num" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}
