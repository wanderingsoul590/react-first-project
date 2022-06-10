import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import Newsc from './components/Newsc';
import Shop from './components/Shop';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route index element={<Newsc country="gunral" />} />
          <Route path="india" element={<Newsc country="in" />} />
          <Route path="shop" element={<Shop />} />
      </Routes>

    </>
  );
}

export default App;