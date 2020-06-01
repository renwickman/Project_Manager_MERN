import React from 'react';
import { Router } from '@reach/router';

import Display from './components/Display';
import Form from './components/Form';
import Update from './components/Update';

import Navbar from './views/Navbar';
import Home from './views/Home';

import './bootstrap.css'

function App() {
  
  return (
    <div className="App">
    <Navbar />
      <Router>
        <Form path = "/new" />
        <Home path='/' />
        <Display path = "/api/products/:id" />
        <Update path = "/products/:id/edit" />
      </Router>
    </div>
  );
}
export default App;