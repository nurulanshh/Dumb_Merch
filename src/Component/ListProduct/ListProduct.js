//import css modules
import cssModules from './ListProduct.module.css'


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
          <th>Photo</th>
          <th>Product Name</th>
          <th>ProductDesc</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='m-auto'>1</td>
          <td className='m-auto'>Earphone.png</td>
          <td className='m-auto'>Earphone Tws</td>
          <td className='m-auto'>Earphone</td>
          <td className='m-auto'>Rp 399.000</td>
          <td className='m-auto'>132</td>
          <td>
            <Button variant="success" className={cssModules.button} href="/edit-product">Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mouse.png</td>
          <td className='m-auto'>Mouse</td>
          <td className='m-auto'>Mouse</td>
          <td className='m-auto'>Rp 59.000</td>
          <td className='m-auto'>144</td>
          <td>
            <Button variant="success" className={cssModules.button}>Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bag.png</td>
          <td className='m-auto'>Slip Bag</td>
          <td className='m-auto'>Slip Bag</td>
          <td className='m-auto'>Rp 99.000</td>
          <td className='m-auto'>174</td>
          <td>
            <Button variant="success" className={cssModules.button}>Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Electornic.png</td>
          <td className='m-auto'>Charger Type-C</td>
          <td className='m-auto'>Charger Type-C</td>
          <td className='m-auto'>Rp 59.000</td>
          <td className='m-auto'>94</td>
          <td>
            <Button variant="success" className={cssModules.button}>Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Stationary.png</td>
          <td className='m-auto'>Stationary Pack</td>
          <td className='m-auto'>Stationary Pack</td>
          <td className='m-auto'>Rp 89.000</td>
          <td className='m-auto'>74</td>
          <td>
            <Button variant="success" className={cssModules.button}>Edit</Button>
            <Button variant="danger" className={cssModules.btn}>Delete</Button>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Cable.png</td>
          <td className='m-auto'>Cable Type-C</td>
          <td className='m-auto'>Cable Type-C</td>
          <td className='m-auto'>Rp 69.000</td>
          <td className='m-auto'>153</td>
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