import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
