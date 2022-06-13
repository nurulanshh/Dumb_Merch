//import css modules
import cssModules from './EditProduct.module.css'


import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditProduct() {
  return (
    <div>
    <Container className={cssModules.Container}>
    <h1 className={cssModules.name}>Edit Product</h1>
      <Form.Group className={cssModules.inputFile} controlId="formBasicFile">
        <Form.Control className={cssModules.input2} variant='danger' type="file"/>
      </Form.Group>
      <Form.Group className={cssModules.input} controlId="formBasicName">
        <Form.Control className={cssModules.input1} type="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className={cssModules.input} controlId="formBasicDexcription">
        <Form.Control className={cssModules.input1} type="text" placeholder="Product Desc .." />
      </Form.Group>
      <Form.Group className={cssModules.input} controlId="formBasicPrice">
        <Form.Control className={cssModules.input1} type="price" placeholder="Rp .." />
      </Form.Group>
      <Form.Group className={cssModules.input} controlId="formBasicQty">
        <Form.Control className={cssModules.input1} type="text" placeholder="ex. 500" />
      </Form.Group>
      <Button className={cssModules.btn} variant="success" type="submit">
        Save
      </Button>
    </Container> 
    </div>
  );
}


export default EditProduct