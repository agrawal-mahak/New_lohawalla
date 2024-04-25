import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import Items from './screens/ItemsPage/Items';
import SingleProduct from './screens/SingleProduct/SingleProduct';
import Contact from './screens/ContactUs/Contact';


function App() {
  return (
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items' element={<Items/>}/>
        {/* <Route path='/singleproduct' element={<SingleProduct />}/> */}
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path='/contact' element={<Contact/>}></Route> 
     </Routes>
  );  
}

export default App;