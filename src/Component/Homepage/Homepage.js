//import css modules
import cssHmModules from './Homepage.module.css'

import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Array from '../../DataTemplate.json'
import { Link } from 'react-router-dom'

  
  function Homepage() {
    return (
      <div>
      <h1 className={cssHmModules.Product}>Product</h1>
      <Row xs={1} md={4} className={cssHmModules.productCard}>
        {Array.map((data) => (
          <Col className='g-4' key={data.id}>
            <Card className='bg-dark'>
              <Link to ={{pathname: `/DataTemplate.json/${data.id}`}}>
              <Card.Img className={cssHmModules.imgCard} variant="top" src={data.image}/>
              </Link>
              <Card.Body>
                <a className={cssHmModules.cardTitle} href="/detail">{data.name}</a>
                <Card.Text className={cssHmModules.cardText}>
                    {data.price}
                </Card.Text>
                <Card.Text className={cssHmModules.cardText}>
                    {data.stock}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    );
  }
  
  export default Homepage;