//import css modules
import cssModules from './Profile.module.css'


import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Profile() {
  return (
    <Container className={cssModules.Container}>
    <Row>
    <Col sm={3} className={cssModules.Col1}>
        <h1 className={cssModules.Profile}>My Profile</h1>
        <img src='/images/profile.png' alt="" className={cssModules.img}/>
    </Col>
    <Col sm={2} className={cssModules.Col2}>
        <div className='mt-5'>
            <h3 className={cssModules.h3}>Name</h3>
            <h4 className={cssModules.h4}>Yujin</h4>
            <h3 className={cssModules.h3}>Email</h3>
            <h4 className={cssModules.h4}>yujinahn@gmail.com</h4>
            <h3 className={cssModules.h3}>Phone</h3>
            <h4 className={cssModules.h4}>085671890566</h4>
            <h3 className={cssModules.h3}>Gender</h3>
            <h4 className={cssModules.h4}>Female</h4>
            <h3 className={cssModules.h3}>Addres</h3>
            <h4 className={cssModules.h4}>Tebet, South Jakarta</h4>
        </div>
    </Col>
    <Col sm={4} className={cssModules.Col3}> 
    <h1 className={cssModules.Profile}>My Transaction</h1>  
    <Card className={cssModules.cardBody}>
    <Row>
        <Col sm={2} className={cssModules.Col4}>
            <img src='/images/tws.png' alt="" className={cssModules.imgCart}/>
        </Col>
        <Col sm={5} className={cssModules.Col5}>
            <p className={cssModules.p1}> Earphone TWS</p>
            <p className={cssModules.p2}> Sunday, 11 June 2022</p>
            <p className={cssModules.p3}> Price : Rp 399.000</p>
            <p className={cssModules.p4}> Sub Total : Rp 399.000</p>
        </Col>
        <Col sm={2} className={cssModules.Col6}>
            <img src='/images/dumbmerch1.png' alt="" className={cssModules.imgCartLogo}/>
        </Col>
    </Row>
    </Card>
    </Col>
    </Row>
    </Container>
  )
}

export default Profile