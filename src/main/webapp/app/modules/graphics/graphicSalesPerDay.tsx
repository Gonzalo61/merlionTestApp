/*
import React, { PureComponent, Fragment,} from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import axios from 'axios';

import { Row, Col } from 'reactstrap';



export default class SalesPerDay extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';
 
  state = {
    info: []

  };

  componentDidMount() {
    axios.get('http://localhost:9000/api/salesPerDay')
    .then(response => {
      const newData = response.data;
      this.setState({
        info: newData
      });
    })
  }

  render() {
    return (
      <Fragment>
        <>
        <Row>
          <Col md="6">
            <h3>VENTAS POR DÍA</h3>
              <BarChart
                width={500}
                height={300}
                data={this.state.info}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
                barSize={20}
              >
                <XAxis dataKey="date" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis /> 
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="num" name="Cantida de Productos" fill="#8884d8" background={{ fill: '#eee' }} />
              </BarChart>
          </Col>
        </Row>
        </>
    </Fragment>
    );
  }
}
*/

import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

import axios from 'axios';

export default class SalesPerDay extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

  state = {
    info: []

  };

  componentDidMount() {
    axios.get('http://localhost:9000/api/salesPerDay')
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