import './App.css';
import './Component/Homepage/Homepage.module.css';
import Homepage from './Component/Homepage/Homepage';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import Register from './Component/Register/Register';
import Profile from './Component/Profile/Profile';
import DetailProduct from './Component/DetaiProduct/DetailProduct';
import ListCategory from './Component/ListCategory/ListCategory';
import EditCategory from './Component/EditCategory/EditCategory';
import ListProduct from './Component/ListProduct/ListProduct';
import EditProduct from './Component/EditProduct/EditProduct';
import ComplainAdmin from './Component/ComplainAdmin/ComplainAdmin';
import ComplainUser from './Component/ComplainUser/ComplainUser';

//import necessary object from react-router-dom
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className='bgColor'>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/detail' element={<DetailProduct/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/category' element={<ListCategory/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/edit-category' element={<EditCategory/>} />
          <Route path='/product' element={<ListProduct/>} />
          <Route path='/edit-product' element={<EditProduct/>} />
          <Route path='/complain-admin' element={<ComplainAdmin/>} />
          <Route path='/complain' element={<ComplainUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
