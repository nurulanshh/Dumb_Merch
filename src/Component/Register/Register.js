//import css modules
import cssModules from './Register.module.css'


import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Register() {
  return (
    <Container className={cssModules.Container}>
    <Row>
    <Col sm={8} className={cssModules.Col1}>
        <img src='/images/dumbmerch1.png' alt="" className={cssModules.img}/>
        <h1 className={cssModules.h1}>Easy, Fast, and Reliable</h1>
        <h5 className={cssModules.h5}>
            Go shopping for merchandise, just got to dumbmerch
            shopping, the biggest merchandise in Indonesia
        </h5>
        <Button variant="danger" className={cssModules.button} href="/login">Login</Button>
        <Button variant="link" className={cssModules.button1} href="/register">Register</Button>

    </Col>

    <Col sm={4} className={cssModules.Col2}>
    <Card className={cssModules.cardBody}>
        <Form className={cssModules.Form}>
        <h6 className={cssModules.h6}>Register</h6>
        <Form.Group className={cssModules.input} controlId="formBasiName">
            <Form.Control className={cssModules.input1} type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className={cssModules.input} controlId="formBasicEmail">
            <Form.Control className={cssModules.input1} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className={cssModules.input} controlId="formBasicPassword">
            <Form.Control className={cssModules.input1} type="password" placeholder="Password" />
        </Form.Group>
        <Button className={cssModules.btn} variant="danger" type="submit" href="/login">
            Register
        </Button>
        </Form>
    </Card>
    </Col>
    </Row>
    </Container>
  )
}

export default Register