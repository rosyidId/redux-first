import React from 'react';
import AddProducts from './components/AddProducts';
import ShowProducts from './components/ShowProducts';
import EditProduct from './components/EditProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='add' element={< AddProducts />} />
          <Route path='/' element={< ShowProducts />} />
          <Route path='edit/:id' element={< EditProduct />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
