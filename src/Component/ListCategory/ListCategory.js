//import css modules
import cssModules from './ListCategory.module.css'


import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function ListCategory() {
  return (
    <div>
    <Container className={cssModules.Container}>
    <h1 className={cssModules.name}>List Category</h1>
    <Table striped bordered hover variant="dark" className={cssModules.table}>
      <thead>
        <tr>
          <th>No.</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='m-auto'>1</td>
          <td className='m-auto'>Earphone</td>
          <td>
            <Button variant="success" className={cssModules.button} href="/edit-category">Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mouse</td>
          <td>
            <Button variant="success" className={cssModules.button}>Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bag</td>
          <td>
            <Button variant="success" className={cssModules.button}>Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Electornic</td>
          <td>
            <Button variant="success" className={cssModules.button}>Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Stationary</td>
          <td>
            <Button variant="success" className={cssModules.button}>Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Cable</td>
          <td>
            <Button variant="success" className={cssModules.button}>Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
    </Container> 
    </div>
  );
}


export default ListCategory