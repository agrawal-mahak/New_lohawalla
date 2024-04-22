import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Screens/Home';
import Items from './Screens/ItemsPage/Items';
import ItemCard from './Screens/ItemsPage/Components/ItemCard';
import SingleProduct from './Screens/SingleProduct/SingleProduct';
import Description from './Screens/SingleProduct/Components/Description';


function App() {
  return (
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/singleproduct' element={<SingleProduct />}/>

     </Routes>

   
  );  
}

export default App;