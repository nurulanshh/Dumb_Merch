//import css modules
import cssModules from './EditCategory.module.css'


import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditCategory() {
  return (
    <div>
    <Container className={cssModules.Container}>
    <h1 className={cssModules.name}>Edit Category</h1>
      <Form.Group className={cssModules.input} controlId="formBasicName">
        <Form.Control className={cssModules.input1} type="name" placeholder="Name" />
      </Form.Group>
      <Button className={cssModules.btn} variant="success" type="submit">
        Save
      </Button>
    </Container> 
    </div>
  );
}


export default EditCategory