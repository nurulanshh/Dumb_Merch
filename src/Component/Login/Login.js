//import css modules
import cssModules from './Login.module.css'


import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

function Login() {

    const [state,setState] = useState({
        email :'',
        password :''
    })

    const handleOnChange = (e) => {
        //setState here
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        
        e.preventDefault()
        //print state value with console.log here
        console.log(state)
    }

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
        <Form className={cssModules.Form} onSubmit={handleOnSubmit}>
        <h6 className={cssModules.h6}>Login</h6>
        <Form.Group className={cssModules.input} controlId="formBasicEmail">
            <Form.Control className={cssModules.input1} onChange={handleOnChange} value={state.email} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className={cssModules.input} controlId="formBasicPassword">
            <Form.Control className={cssModules.input1} onChange={handleOnChange} value={state.email} type="password" placeholder="Password" />
        </Form.Group>
        <Button className={cssModules.btn} variant="danger" type="submit" href="/">
            Login
        </Button>
        </Form>
    </Card>
    </Col>
    </Row>
    </Container>
  )
}

export default Login