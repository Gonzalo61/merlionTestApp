import React, { PureComponent, Fragment,} from 'react';
import { Row, Col } from 'reactstrap';
import SalesPerDayDeliv from './graphicsSalesPerDayDeliv';
import SalesPerDay from './graphicSalesPerDay';
import SalesTopProducts from './graphicsTopProduct';
import SalesTopProfitProducts from './graphicsTopProfitProducts';


export default class SalesGraphics extends React.Component {
  
 
  render() {
    return (
      <Fragment>
        <>
        <Row>
          <Col md="6">
            <h3>Cantidad de ventas con estado Delivered por día</h3>
            <SalesPerDayDeliv></SalesPerDayDeliv>
          </Col>
          <Col md="6">
            <h3>Cantidad de ventas por dia</h3>
            <SalesPerDay></SalesPerDay>
          </Col>
          <Col md="6">
            <h3>Top 5 Productos más vendidos</h3>
            <SalesTopProducts></SalesTopProducts>
          </Col>
          <Col md="6">
            <h3>Top 5 productos que produjeron más ganancias</h3>
            <SalesTopProfitProducts></SalesTopProfitProducts>
          </Col>
        </Row>
        </>
    </Fragment>
    );
  }
}

