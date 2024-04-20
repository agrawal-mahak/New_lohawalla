import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Screens/Home';
import Items from './Screens/ItemsPage/Items';
import ItemCard from './Screens/ItemsPage/Components/ItemCard';


function App() {
  return (
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items' element={<Items/>}/>
     </Routes>

   // <div>
   //      <ItemCard />
   // </div>
  );  
}

export default App;