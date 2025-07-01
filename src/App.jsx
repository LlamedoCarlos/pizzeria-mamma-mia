<<<<<<< HEAD
// src/App.jsx
import React from 'react';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <div className="App">
      <AppRouter />
=======
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
//import Login from './components/Login';
//import Register from './components/Register';
import './main.css'; // Estilos específicos

const App = () => {
  return (
    <div>
      <Navbar />
        <Home />
       {/* <Register /> */}
      {/* <Login /> */}
      <Cart />
      <Footer />
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
