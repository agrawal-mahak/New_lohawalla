import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Items from './screens/ItemsPage/Items';
import Home from './screens/Home';
 
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